import { FileService } from '@app/services/file.service';
import { TYPES } from '@app/types';
import { Dessin } from '@common/communication/dessin';
import { NextFunction, Request, Response, Router } from 'express';
import { inject, injectable } from 'inversify';
import * as multer from 'multer';
import * as path from 'path';
import { SaveService } from '../services/save.service';
const HTTP_STATUS_CREATED = 201;
const HTTP_BAD_REQUEST = 400;
const ETIQUETTE_MAX_VALUE = 15;
@injectable()
export class SaveController {
    upload: multer.Multer = multer();
    router: Router;
    constructor(@inject(TYPES.SaveService) private saveService: SaveService, @inject(TYPES.FileService) private fileService: FileService) {
        this.configureRouter();
    }
    private configureRouter(): void {
        this.router = Router();
        /**
         * @swagger
         *
         * definitions:
         *   Drawing:
         *     type: object
         *     properties:
         *       name:
         *         type: string
         *       etiquette:
         *         type: string[]
         */

        /**
         * @swagger
         *
         * /api/save/:
         *   post:
         *     description: add a drawing to the list
         *
         */
        this.router.post('/', this.upload.single('dessin'), async (req: Request, res: Response, next: NextFunction) => {
            // Send the request to the service and send the response
            const etiquettes: string[] = JSON.parse(req.body.tags);
            if (this.isGoodRequest(req.file.originalname, etiquettes)) {
                const id = await this.saveService.add({ name: req.file.originalname, etiquette: etiquettes });
                this.fileService.write(id as string, req.file.buffer);
                res.status(HTTP_STATUS_CREATED);
            } else {
                res.status(HTTP_BAD_REQUEST);
            }
            res.json();
        });

        /**
         * @swagger
         *
         * /api/save/delete:
         *   post:
         *     description: remove a drawing
         *
         */
        this.router.post('/delete', this.upload.single('dessin'), async (req: Request, res: Response, next: NextFunction) => {
            // Send the request to the service and send the response
            let error = false;
            this.fileService.delete(req.body.id);
            if (!(await this.saveService.delete({ id: req.body.id, name: req.body.dessin, etiquette: JSON.parse(req.body.tags) }))) error = true;
            if (error) {
                res.status(HTTP_BAD_REQUEST);
            } else {
                res.status(HTTP_STATUS_CREATED);
            }

            res.json();
        });

        /**
         * @swagger
         *
         * /api/save/:
         *   get:
         *     description: return all drawing
         *
         */
        this.router.get('/all', async (req: Request, res: Response, next: NextFunction) => {
            // Send the request to the service and send the response

            const dessins = await this.saveService.allDrawing();
            const verifDessins: Dessin[] = [];

            dessins.forEach((dessin) => {
                if (this.fileService.exist(dessin.id as string)) {
                    verifDessins.push(dessin);
                }
            });
            res.status(HTTP_STATUS_CREATED);
            res.json(verifDessins);
        });

        /**
         * @swagger
         *
         * /api/save/drawing:
         *   get:
         *     description: return all drawing
         *
         */
        this.router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
            // Send the request to the service and send the response
            const id = req.params.id;
            const dir = path.join(__dirname, '../../image', `/${id}.png`);
            if (this.fileService.exist(id as string)) {
                res.sendFile(dir);
            } else {
                res.status(HTTP_BAD_REQUEST);
                res.json();
            }
        });
    }

    isGoodRequest(name: string, etiquettes: string[]): boolean {
        let goodRequest = true;
        etiquettes.forEach((etiquette) => {
            if (etiquette.length > ETIQUETTE_MAX_VALUE) goodRequest = false;
        });
        if (name === '') goodRequest = false;
        return goodRequest;
    }
}
