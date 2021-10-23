import * as fs from 'fs';
import { injectable } from 'inversify';
import * as path from 'path';
import 'reflect-metadata';
// tslint:disable:no-any
@injectable()
export class FileService {
    write(id: string, data: any): void {
        fs.writeFileSync(path.resolve(__dirname, `../../image/${id}.png`), data);
    }
    delete(id: string): void {
        fs.unlinkSync(path.resolve(__dirname, `../../image/${id}.png`));
    }

    exist(id: string): boolean {
        return fs.existsSync(path.resolve(__dirname, `../../image/${id}.png`));
    }
}
