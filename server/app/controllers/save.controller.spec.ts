import { expect } from 'chai';
import * as path from 'path';
import * as sinon from 'sinon';
import * as supertest from 'supertest';
import { Dessin } from '../../../common/communication/dessin';
import { Stubbed, testingContainer } from '../../test/test-utils';
import { Application } from '../app';
import { FileService } from '../services/file.service';
import { SaveService } from '../services/save.service';
import { TYPES } from '../types';
import { SaveController } from './save.controller';

const HTTP_STATUS_CREATED = 201;
const HTTP_BAD_REQUEST = 400;

describe('SaveController', () => {
    let saveService: Stubbed<SaveService>;
    let fileService: Stubbed<FileService>;
    let controller: SaveController;
    let app: Express.Application;
   // let stubAddSaveService;
   // let save: SaveService;
    let bd : Dessin[] =[];

    beforeEach(async () => {
        bd.push({id:'a',name:'test',etiquette:['']},{id:'b',name:'test2',etiquette:['aaaaaaaaaaaaaaaaa']},
        {id:'c',name:'test3',etiquette:['']},{id:'d',name:'test4',etiquette:['']} );

        //stubAddSaveService = sinon.stub()
        const [container, sandbox] = await testingContainer();
        container.rebind(TYPES.SaveService).toConstantValue({
            allDrawing: sandbox.stub().resolves(bd),
            add: sandbox.stub().resolves(bd[0].id as string),
            delete: sandbox.stub().resolves(true),
        });

        container.rebind(TYPES.FileService).toConstantValue({
            exist: sandbox.stub().returns(true),
            write: sandbox.stub(),
            delete: sandbox.stub().returns(false),
        });
       //service = comme lautre (types.service)
        app = container.get<Application>(TYPES.Application).app;
        saveService = container.get(TYPES.SaveService);
        fileService = container.get(TYPES.FileService);
        controller = container.get<SaveController>(TYPES.SaveController);


    });

    it('should strore drawing on valid post request', async () => {
       
        return supertest(app)
        .post('/api/save')
        .field('tags',JSON.stringify(bd[0].etiquette))
        .attach('dessin',path.resolve(__dirname,'../../test/testImage.png'))
        .expect(HTTP_STATUS_CREATED);
    });

    it('should not strore drawing on invalid post request', async () => {
        sinon.stub()
        return supertest(app)
        .post('/api/save')
        .field('tags',JSON.stringify(bd[1].etiquette))
        .attach('dessin',path.resolve(__dirname,'../../test/testImage.png'))
        .expect(HTTP_BAD_REQUEST);
    });


    it('should return not good request if has no name', async () => {
        expect(controller.isGoodRequest('',[])).to.be.false;
    });

    it('should delete drawing on valid request', async () => {
        return supertest(app)
        .post('/api/save/delete')
        .field('tags',JSON.stringify(bd[0].etiquette))
        .field('dessin',path.resolve(__dirname,'../../test/testImage.png'))
        .field('id',path.resolve(bd[0].name))
        .set('Accept', 'application/json')
        .expect(HTTP_STATUS_CREATED);
    });

    it('should not delete drawing on invalid request', async () => {

        saveService.delete.resolves(false);
        return supertest(app)
        .post('/api/save/delete')
        .field('tags',JSON.stringify(bd[0].etiquette))
        .field('dessin',path.resolve(__dirname,'../../','/workspace/server/test/testImage.png'))
        .field('id',path.resolve(bd[0].name))
        .set('Accept', 'application/json')
        .expect(HTTP_BAD_REQUEST);
    });

    it('should get all metadata with an image', async () => {
        return supertest(app)
        .get('/api/save/all')
        .expect(HTTP_STATUS_CREATED).then((response:any)=> {
            expect(response.body).to.deep.equal(bd);
        });
    });

    it('should get no image because non exsist', async () => {
        fileService.exist.returns(false);
        return supertest(app)
        .get('/api/save/all')
        .expect(HTTP_STATUS_CREATED).then((response:any)=> {
            expect(response.body).to.deep.equal([]);
        });
    });

    it('should get the image of a drawing', async () => {
        return supertest(app)
        .get(`/api/save/${bd[0].id}`)
        .set('Accept', 'application/json')
        .expect(404);// res.sendFile ne va pas trouver les data de limage
    });

    it('should not get the image of a drawing if doesnt exist', async () => {
        fileService.exist.returns(false);
        return supertest(app)
        .get(`/api/save/${bd[0].id}`)
        .set('Accept', 'application/json')
        .expect(HTTP_BAD_REQUEST);
    });
});

