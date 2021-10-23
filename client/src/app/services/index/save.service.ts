import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Global } from '@app/shared/global';
import { Dessin } from '@common/communication/dessin';
import { Observable } from 'rxjs';
@Injectable({
	providedIn: 'root',
})
export class SaveService {
	constructor(private http: HttpClient) {}

	async basicGet(): Promise<Dessin[]> {
		return this.http.get<Dessin[]>(Global.BASE_URL + 'all').toPromise();
	}

	basicPost(dessin: FormData): Observable<HttpResponse<void>> {
		return this.http.post<void>(Global.BASE_URL, dessin, { observe: 'response' });
	}

	deletePost(dessin: FormData): Observable<HttpResponse<void>> {
		return this.http.post<void>(Global.BASE_URL + 'delete', dessin, { observe: 'response' });
	}

	getDrawing(id: string): Observable<Blob> {
		return this.http.get(Global.BASE_URL + `${id}`, { responseType: 'blob' });
	}
}
