import { BucketOptions } from '@app/classes/bucket-options';
import { GridOptions } from '@app/classes/grid-options';
import { LineOptions } from '@app/classes/line-options';
import { ShapeOptions } from '@app/classes/shape-options';
import { SprayOptions } from '@app/classes/spray-options';
import { Global } from '@app/shared/global';
import { StampOptions } from './stamp-options';
import { TextOptions } from './text-options';

export class ToolOption {
	shapeOptions: ShapeOptions;
	lineOptions: LineOptions;
	sprayOptions: SprayOptions;
	gridOptions: GridOptions;
	stampOptions: StampOptions;
	textOptions: TextOptions;
	size: number = Global.MIN_TOOL_SIZE;
	bucketOptions: BucketOptions;

	constructor(
		shapeCrevices?: number,
		lineOptions?: boolean,
		sprayOptions?: boolean,
		size?: number,
		gridOptions?: boolean,
		bucketOptions?: boolean,
		textOptions?: boolean,
		stampOptions?: boolean,
	) {
		if (shapeCrevices !== undefined && shapeCrevices >= 0) this.shapeOptions = new ShapeOptions(shapeCrevices);
		if (lineOptions) this.lineOptions = new LineOptions();
		if (sprayOptions) this.sprayOptions = new SprayOptions();
		if (textOptions) this.textOptions = new TextOptions();
		if (gridOptions) this.gridOptions = new GridOptions();
		if (stampOptions) this.stampOptions = new StampOptions();
		if (size) this.size = size;
		if (bucketOptions) this.bucketOptions = new BucketOptions();
	}
}
