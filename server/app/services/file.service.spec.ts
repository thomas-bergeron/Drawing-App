//import { expect } from "chai";
import { Dessin } from '@common/communication/dessin';
import { expect } from 'chai';
import * as fs from 'fs';
import * as path from 'path';
import { FileService } from './file.service';
describe("File service", async () => {


    let testDrawing: Dessin = {id:'test/abcde', name:'test', etiquette:[],image:path.resolve('test/testImage.png')};
    let fileService: FileService;

    beforeEach(async () => {
        fileService = new FileService();   
    });


    it("should add the file ", async () => {
        
        fileService.write(testDrawing.id as string, testDrawing.image as string);
        expect(fs.existsSync(path.resolve(__dirname,`../../image/${testDrawing.id as string}.png`))).to.be.true;
        await fs.unlinkSync(path.resolve(__dirname,`../../image/${testDrawing.id as string}.png`));
       
    });

    it("should delete the file", async () => {
       
        //create a file and call delete, see if file exist
        fs.writeFileSync(path.resolve(__dirname,`../../image/${testDrawing.id as string}.png`),testDrawing.image);
        fileService.delete(testDrawing.id as string);
        expect(fs.existsSync(path.resolve(__dirname,`../../image/${testDrawing.id as string}.png`))).to.not.be.true;
    });

    it("verify if file exist (does not)", async () => {
        if(fs.existsSync(path.resolve(__dirname,`../../image/${testDrawing.id as string}.png`))){
            await fs.unlinkSync(path.resolve(__dirname,`../../image/${testDrawing.id as string}.png`));
        }
        expect(fileService.exist(testDrawing.id as string)).to.not.be.true;
    });

    it("verify if file exist(does)", async () => {
        await fs.writeFileSync(path.resolve(__dirname,`../../image/${testDrawing.id as string}.png`),testDrawing.image);
        expect(fileService.exist(testDrawing.id as string)).to.be.true;
        await fs.unlinkSync(path.resolve(__dirname,`../../image/${testDrawing.id as string}.png`));
    });


   


});
