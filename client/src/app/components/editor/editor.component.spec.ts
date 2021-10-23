import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { EventManagerService } from '@app/services/event-manager/event-manager.service';
import { EditorComponent } from './editor.component';

describe('EditorComponent', () => {
	let component: EditorComponent;
	let eventManagerSpy: jasmine.SpyObj<EventManagerService>;

	beforeEach(async(() => {
		eventManagerSpy = jasmine.createSpyObj('EventManagerService', ['startMouseMoveListening']);
		TestBed.configureTestingModule({
			imports: [MatDialogModule],
			declarations: [EditorComponent],
			providers: [{ provide: EventManagerService, useValue: eventManagerSpy }],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		}).compileComponents();
	}));

	beforeEach(() => {
		const fixture = TestBed.createComponent(EditorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
