import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DrawingService } from '@app/services/drawing/drawing.service';

@Component({
	selector: 'app-export',
	templateUrl: './export.component.html',
	styleUrls: ['./export.component.scss'],
})
export class ExportComponent implements OnInit {
	pngImage: string = '';
	jpegImage: string = '';
	name: string = '';
	type: string = '.png';
	imgurUrl: string = 'https://api.imgur.com/3/image';
	postLink: string = '';
	clientID: string = '69294db23e08528';
	filterList: string[] = ['blur', 'grayscale', 'sepia', 'invert', 'darken', 'none'];
	filter: string = 'none';
	imageUrl: string;

	constructor(private drawingService: DrawingService, private snackBar: MatSnackBar) {}

	ngOnInit(): void {
		this.pngImage = this.drawingService.baseCtx.canvas.toDataURL('image/png');
		this.jpegImage = this.drawingService.baseCtx.canvas.toDataURL('image/jpeg');
	}

	exportLocal(): void {
		const exportLink = document.getElementById('link');
		if (exportLink) {
			if (!this.name) {
				this.name = 'monDessin';
			}
			exportLink.setAttribute('download', this.name + this.type);
			if (this.type === '.png') {
				exportLink.setAttribute('href', this.pngImage.replace('image/png', 'image/octet-stream'));
			} else if (this.type === '.jpeg') {
				exportLink.setAttribute('href', this.jpegImage.replace('image/jpeg', 'image/octet-stream'));
			}
			exportLink.click();
		}
	}

	async exportImgur(): Promise<void> {
		switch (this.type) {
			case '.png': {
				this.imageUrl = this.pngImage.split(',')[1];
				break;
			}
			case '.jpeg': {
				this.imageUrl = this.jpegImage.split(',')[1];
				break;
			}
		}

		const myHeaders = new Headers();
		myHeaders.append('Accept', 'application/json');
		myHeaders.append('Authorization', 'Client-ID ' + this.clientID);

		const formdata = new FormData();
		formdata.append('type', 'base64');
		formdata.append('image', this.imageUrl);
		formdata.append('name', this.name);

		const requestOptions: RequestInit = {
			method: 'POST',
			headers: myHeaders,
			body: formdata,
			redirect: 'manual',
		};

		fetch(this.imgurUrl, requestOptions)
			.then((response) => response.json())
			.then((post) => {
				this.postLink = post.data.link;
				this.openSnackBar();
			})
			.catch((error) => console.log('error', error));
	}

	openSnackBar(): void {
		this.snackBar
			.open('Publication réussie: ' + this.postLink, 'Ouvrir', { duration: 4000 })
			.onAction()
			// tslint:disable-next-line: deprecation
			.subscribe(() => {
				window.open(this.postLink);
			});
	}

	createModifiableImage(): void {
		const canvas = document.createElement('canvas');
		canvas.id = 'tmp-canvas';
		canvas.width = this.drawingService.baseCtx.canvas.width;
		canvas.height = this.drawingService.baseCtx.canvas.height;
		const ctx = canvas.getContext('2d');

		this.applyFilter(ctx);
	}

	applyFilter(ctx: CanvasRenderingContext2D | null): void {
		if (ctx) {
			switch (this.filter) {
				case 'blur': {
					ctx.filter = 'blur(4px)';
					break;
				}
				case 'grayscale': {
					ctx.filter = 'grayscale(100%)';
					break;
				}
				case 'sepia': {
					ctx.filter = 'sepia(100%)';
					break;
				}
				case 'invert': {
					ctx.filter = 'invert(100%)';
					break;
				}
				case 'darken': {
					ctx.filter = 'brightness(50%)';
					break;
				}
				case 'none': {
					ctx.filter = 'none';
					break;
				}
			}
			ctx.drawImage(this.drawingService.baseCtx.canvas, 0, 0, ctx.canvas.width, ctx.canvas.height);
			this.pngImage = ctx.canvas.toDataURL('image/png');
			this.jpegImage = ctx.canvas.toDataURL('image/jpeg');
		}
	}
}
