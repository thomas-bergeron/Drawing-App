import { Component, OnInit } from '@angular/core';
import { EventManagerService } from '@app/services/event-manager/event-manager.service';
@Component({
	selector: 'app-editor',
	templateUrl: './editor.component.html',
	styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
	constructor(private eventManager: EventManagerService) {}

	ngOnInit(): void {
		// Je trouve plus pertinent d'avoir ces deux declarations que d'avoir deux fonctions
		// avec deux hostlistener qui font seulement appeler la fonction
		document.body.addEventListener('mousemove', this.eventManager.onMouseMove);
		document.body.addEventListener('wheel', this.eventManager.onWheel);
	}
}
