import { Component, Input } from '@angular/core';
import { Tool } from '@app/classes/tool';
import { ToolService } from 'src/app/services/tools/tool.service';
import { Fonts, stamps } from 'src/app/shared/global';

@Component({
	selector: 'app-attributes-panel',
	templateUrl: './attributes-panel.component.html',
	styleUrls: ['./attributes-panel.component.scss'],
})
export class AttributesPanelComponent {
	min: number = 1;
	max: number = 50;
	value: number = 0;
	@Input() activeTool: Tool;

	constructor(public toolService: ToolService) {
		this.toolService.changeLimitSize$.subscribe((minSize: number) => {
			this.min = minSize;
		});
		this.activeTool = toolService.currentTool;
	}

	get fonts(): Fonts[] {
		return Object.values(Fonts);
	}

	get stamps(): string[] {
		return stamps;
	}
}
