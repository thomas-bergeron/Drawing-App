import { Global } from '@app/shared/global';

export class SprayOptions {
	dropletSize: number = 1;
	spraySize: number = Global.MIN_SPRAY_SIZE;
	sprayTime: number = Global.TIME_DELAY;
}
