import { stamps } from '@app/shared/global';

export class StampOptions {
	stampSrc: string;
	scalingFactor: number = 1;
	orientation: number = 0;

	constructor() {
		this.stampSrc = stamps[0];
	}
}
