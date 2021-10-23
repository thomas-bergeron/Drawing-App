import { Dessin } from '@common/communication/dessin';
import { expect } from "chai";
import { MongoMemoryServer } from "mongodb-memory-server";
import { SaveService } from "./save.service";

describe("Saveservice", () => {
  
  let saveService: SaveService;
  let mongoServer : MongoMemoryServer;
  let fakeDrawing: Dessin;
  beforeEach(async () => {
    fakeDrawing = {name:'test', etiquette:[]};
    saveService = new SaveService();
    
    mongoServer = new MongoMemoryServer();
    const mongoUri = await mongoServer.getUri();
    saveService.url = mongoUri;
    await saveService.connect();   
  });


  it("should connect to database when connect is called", async () => {
    expect(saveService.dataBase).to.not.be.undefined;
    expect(saveService.dataBase.databaseName).to.equal("PolyDessin");
  });

  it("should not connect to database whit wrong url", async () => {
    saveService.url ='DONT CONNECT';
    try{
      await saveService.connect();
      expect(false).to.be.true;
    }catch{
      expect(true).to.be.true;
    } 
  
  });



  it("should add a drawing to the database", async () => {
    expect(await saveService.add(fakeDrawing)).to.not.be.undefined;
  });


  it("should delete a drawing to the database", async () => {
    fakeDrawing.id = await (await saveService.dataBase.collection('dessin').insertOne(fakeDrawing)).insertedId;
    expect(await saveService.delete(fakeDrawing)).to.be.true;
  });

  it("should return false when delete anon exisititng drawing to the database", async () => {
   expect(await saveService.delete(fakeDrawing)).to.not.be.true;
 });

  it("should return all the drawings", async () => {
    await saveService.dataBase.collection('dessin').insertOne(fakeDrawing);
    const array:Dessin[] = await saveService.allDrawing();
    expect(array[0].name).to.deep.equal(fakeDrawing.name);
  });

});
