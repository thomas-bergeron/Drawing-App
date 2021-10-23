import { Container } from 'inversify';
import { Application } from './app';
import { SaveController } from './controllers/save.controller';
import { Server } from './server';
import { FileService } from './services/file.service';
import { SaveService } from './services/save.service';
import { TYPES } from './types';

export const containerBootstrapper: () => Promise<Container> = async () => {
    const container: Container = new Container();

    container.bind(TYPES.Server).to(Server);
    container.bind(TYPES.Application).to(Application);
    container.bind(TYPES.SaveController).to(SaveController);
    container.bind(TYPES.SaveService).to(SaveService);
    container.bind(TYPES.FileService).to(FileService);

    return container;
};
