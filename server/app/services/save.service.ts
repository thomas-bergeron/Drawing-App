import { Dessin } from '@common/communication/dessin';
import { injectable } from 'inversify';
import * as mongo from 'mongodb';
import 'reflect-metadata';
@injectable()
export class SaveService {
    dataBase: mongo.Db;
    url: string = 'mongodb+srv://Admin:polytechnique@projet2.qqcqd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
    constructor() {
        this.connect();
    }
    async connect(): Promise<void> {
        const db = await mongo.connect(this.url);
        this.dataBase = db.db('PolyDessin');
    }

    async add(dessin: Dessin): Promise<string | undefined> {
        const result = await this.dataBase.collection('dessin').insertOne(dessin);
        return (result.insertedId as mongo.ObjectId).toHexString();
    }

    async delete(dessin: Dessin): Promise<boolean> {
        const result: mongo.DeleteWriteOpResultObject = await this.dataBase.collection('dessin').deleteOne({ _id: new mongo.ObjectId(dessin.id) });
        return result.deletedCount === 1;
    }
    async allDrawing(): Promise<Dessin[]> {
        return this.dataBase
            .collection('dessin')
            .find({})
            .toArray()
            .then((result) => {
                const dessin: Dessin[] = [];
                result.forEach((element) => {
                    dessin.push({ id: element._id, name: element.name, etiquette: element.etiquette });
                });
                return dessin;
            });
    }
}
