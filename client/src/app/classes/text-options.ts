import { Fonts, Global } from '@app/shared/global';

export class TextOptions {
	fontSize: number = Global.DEFAULT_FONT_SIZE;
	font: Fonts = Fonts.Arial;
	isBold: boolean = false;
	isItalic: boolean = false;
	alignment: string = 'left';
}
