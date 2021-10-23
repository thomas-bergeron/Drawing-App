import { Component } from '@angular/core';
import { CommandManagerService } from '@app/services/commands/command-manager.service';
import { EventManagerService } from '@app/services/event-manager/event-manager.service';
import { ToolService } from '@app/services/tools/tool.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	constructor(public toolService: ToolService, public commandManager: CommandManagerService, public eventManager: EventManagerService) {}
}
