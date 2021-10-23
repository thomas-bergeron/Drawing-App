import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dessin } from '@common/communication/dessin';
@Component({
	selector: 'app-fiche',
	templateUrl: './fiche.component.html',
	styleUrls: ['./fiche.component.scss'],
})
export class FicheComponent {
	@Input() dessin: Dessin = { name: 'Dessin vide', etiquette: [], image: '' };
	@Output() deleteFicheEvent: EventEmitter<Dessin> = new EventEmitter<Dessin>();
	@Output() openFicheEvent: EventEmitter<Dessin> = new EventEmitter<Dessin>();

	get name(): string {
		return this.dessin.name;
	}

	image(): string {
		if (this.dessin.name === 'Dessin vide')
			return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAQAAAAi5ZK2AAABcUlEQVR42u3RAQ0AAAgDIN8/9K3hJlQg7fBMpEtHOtKRjnSkIx3pSEc60pGOdKQjHelIl450pCMd6UhHOtKRjnSkIx3pSEc60pEuHelIRzrSkY50pCMd6UhHOtKRjnSkI1060pGOdKQjHelIRzrSkY50pCMd6UhHunSkIx3pSEc60pGOdKQjHelIRzrSkY506dKlIx3pSEc60pGOdKQjHelIRzrSkY50pEtHOtKRjnSkIx3pSEc60pGOdKQjHelIl450pCMd6UhHOtKRjnSkIx3pSEc60pEuHelIRzrSkY50pCMd6UhHOtKRjnSkI1060pGOdKQjHelIRzrSkY50pCMd6UhHunTp0pGOdKQjHelIRzrSkY50pCMd6UhHOtKlIx3pSEc60pGOdKQjHelIRzrSkY50pEtHOtKRjnSkIx3pSEc60pGOdKQjHelIl450pCMd6UhHOtKRjnSkIx3pSEc60pEuHelIRzrSkY50pHPDAulX8xYd9+8SAAAAAElFTkSuQmCC';
		return this.dessin.image as string;
	}
	remove(): void {
		this.deleteFicheEvent.emit(this.dessin);
	}
	open(): void {
		this.openFicheEvent.emit(this.dessin);
	}
}
