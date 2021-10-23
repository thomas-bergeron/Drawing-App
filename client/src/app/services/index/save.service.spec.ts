import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Global } from '@app/shared/global';
import { Dessin } from '@common/communication/dessin';
import { SaveService } from './save.service';

describe('SaveService', () => {
	let httpMock: HttpTestingController;
	let service: SaveService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
		});
		service = TestBed.inject(SaveService);
		httpMock = TestBed.inject(HttpTestingController);
	});

	afterEach(() => {
		httpMock.verify();
	});

	it('should return expected message (HttpClient called once)', () => {
		const expectedMessage: Dessin = { name: 'test', etiquette: [] };
		const arrayToexpect: Dessin[] = [];
		arrayToexpect.push(expectedMessage);
		// check the content of the mocked call
		service.basicGet().then((response: Dessin[]) => {
			expect(response[0]).toEqual(expectedMessage);
		});
		const req = httpMock.expectOne(`${Global.BASE_URL}all`);
		expect(req.request.method).toBe('GET');
		// actually send the request
		req.flush(arrayToexpect);
	});

	it('should add the drawing to server (HttpClient called once)', () => {
		const sentMessage: Dessin = { name: 'test', etiquette: [] };
		const mockForm: FormData = new FormData();
		mockForm.append(sentMessage.name, JSON.stringify(sentMessage.etiquette));

		// subscribe to the mocked call
		// tslint:disable-next-line: no-empty
		service.basicPost(mockForm).subscribe(() => {});

		const req = httpMock.expectOne(Global.BASE_URL);
		expect(req.request.method).toBe('POST');
		// actually send the request
		req.flush(sentMessage);
	});

	it('should delete the drawing on server (HttpClient called once)', () => {
		const sentMessage: Dessin = { name: 'test', etiquette: [] };
		const fakeForm: FormData = new FormData();
		fakeForm.append(sentMessage.name, JSON.stringify(sentMessage.etiquette));

		// subscribe to the mocked call
		// tslint:disable-next-line: no-empty
		service.deletePost(fakeForm).subscribe(() => {});

		const req = httpMock.expectOne(`${Global.BASE_URL}delete`);
		expect(req.request.method).toBe('POST');
		// actually send the request
		req.flush(sentMessage);
	});

	it('should return the image of drawing (HttpClient called once)', () => {
		const id = 'aaaa';
		const fakeBlob = new Blob(['']);
		// check the content of the mocked call
		service.getDrawing(id).subscribe();
		const req = httpMock.expectOne(Global.BASE_URL + `${id}`);
		expect(req.request.method).toBe('GET');
		// actually send the request
		req.flush(fakeBlob);
	});
});
