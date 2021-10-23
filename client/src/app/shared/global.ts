import { Vec2 } from '@app/classes/vec2';
import { Dessin } from '@common/communication/dessin';

export class Global {
	static readonly MAX_TOOL_SIZE: number = 40;
	static readonly MIN_TOOL_SIZE: number = 4;
	static readonly ONE: number = 1;
	static readonly DEFAULT_WIDTH: number = 1000;
	static readonly DEFAULT_HEIGHT: number = 800;
	static readonly NUMBER_OF_TOOLS: number = 10;
	static readonly DUMMY_PATH: Vec2[] = [
		{
			x: 0,
			y: 0,
		},
		{
			x: 5,
			y: 0,
		},
		{
			x: 5,
			y: 5,
		},
		{
			x: 0,
			y: 5,
		},
	];
	static readonly DUMMY_SIZE: number = 10;
	static readonly DRAWING_CONTAINER_SIZE_BUFFER: number = 5;
	static readonly NEW_SIZE: number = 300;
	static readonly WRONG_NEW_SIZE: number = 100;
	static readonly WRONG_NEW_MOUSE_POSITION: number = -1000;
	static readonly NEW_WIDTH: number = 300;
	static readonly NEW_HEIGHT: number = 400;
	static readonly MIN_SIZE_CONDITION: number = 500;
	static readonly RAYON_MAX: number = 20;
	static readonly MIN_SIZE: number = 250;
	static readonly MIN_SIZE_WITH_PADDING: number = 254;
	static readonly PADDING_SIZE: number = 1;
	static readonly HALF_CP_SIZE: number = 5;
	static readonly END_OF_PROPERTY_NUMBER: number = 4;
	static readonly LINE_LIST: number[][] = [
		[1, 1, 0], // -45
		[1, -Global.ONE, 0], // 45
		[1, 0, 0], // 0
		[0, 1, 0], // 90
	];
	static readonly SCROLLBAR_WIDTH: number = 10;
	static readonly INCORRECT_MOUSE_EVENT_INDEX: number = 4;
	static readonly mouseMoveEvent: MouseEvent = new MouseEvent('mousemove', {
		cancelable: false,
		view: window,
		detail: 1,
		screenX: 450,
		screenY: 50,
		clientX: 450,
		clientY: 50,
		ctrlKey: false,
		altKey: false,
		shiftKey: false,
		metaKey: false,
		button: 0,
		bubbles: true,
	});
	// Constantes pour drawing component
	static readonly TIMEOUT: number = 100;
	static readonly PERIM_LINEWIDTH: number = 2;
	static readonly PERIM_LINEDASH: number = 6;
	// tslint:disable:no-magic-numbers
	static readonly SELECTION_LINEDASH: number[] = [5, 15];
	static readonly MIN_EDGES: number = 3;
	static readonly DEFAULT_RADIUS: number = 100;
	static readonly TEST_NBVERTICES: number = 4;
	static readonly DEFAULT_CENTER: Vec2 = { x: 150, y: 150 };
	static readonly TEST_RADIUS: number = 14.5;
	static readonly TEST_VERTICES: Vec2[] = [
		{ x: 200, y: 300 },
		{ x: 100, y: 200 },
		{ x: 200, y: 100 },
		{ x: 300, y: 200 },
		{ x: 200, y: 300 },
	];
	// constantes pour shape-options
	static readonly DEFAULT_VERTICES_NUMBER: number = 3;
	static readonly MAX_VERTICES_NUMBER: number = 12;
	// constantes pour ellipse-service
	static readonly ELLIPSE_PERIM_LINEWIDTH: number = 2;
	static readonly ELLIPSE_PERIM_LINEDASH: number = 6;
	// constantes pour la sélection rectange/ellipse
	static readonly UNDEFINED_SIZE: number = -1;
	static readonly DEFAULT_DASH_AMOUNT: number = 5;
	static readonly BOX_CP_SIZE: number = 5;
	static readonly NEGATIVE_DEFAULT_DELTA: number = -1;
	static readonly SHIFT_FACTOR: number = 1.5;
	static readonly TEST_DELTA: number = 25;
	static readonly DEFAULT_CANVAS_SIZE: number = 500;
	static readonly DEFAULT_VECTOR: Vec2 = { x: 0, y: 0 };
	static readonly RESET_VECTOR: Vec2 = { x: -1, y: -1 };
	static readonly TEST_VECTOR: Vec2 = { x: 100, y: 100 };
	static readonly TEST_TARGET_VECTOR: Vec2 = { x: 125, y: 125 };
	static readonly NEGATIVE_TEST_VECTOR: Vec2 = { x: -100, y: -100 };
	static readonly ARROW_SUBSTRING_LENGTH: number = 5;
	static readonly ARROW_NUMBER: number = 4;
	static readonly TEST_EVENT_INDEX: number = 11;
	static readonly TEST_DISTANCE: number = 50;
	static readonly N_ONE: number = -1;
	static readonly N_TWO: number = -2;
	static readonly MINUS_ONE: number = -1;
	static readonly MINUS_TWO: number = -2;

	static IS_FLIPPED: Vec2 = { x: 1, y: 1 };
	static readonly UNITARY_VECTOR: Vec2 = { x: 1, y: 1 };
	static readonly SHIFT_AMOUNT: number = 3;
	static readonly CALL_AMOUNT: number = 3;
	static readonly DUMMY_POSITION: Vec2 = { x: 3, y: 3 };
	static readonly INIT_TIMER: number = 500;
	static readonly OTHER_TIMER: number = 100;
	static readonly SHIFT_SELECTION_SHORTCUT: string = 'shiftSelection';
	static readonly RESIZE_SELECTION_SHORTCUT: string = 'resizeSelection';
	static readonly COPY_SHORTCUT: string = 'c';
	static readonly CUT_SHORTCUT: string = 'x';
	static readonly PASTE_SHORTCUT: string = 'v';
	static readonly RECTANGLE_LIMIT_OFFSET: number = 10;
	// constante pour eraser-service
	static readonly ERASER_MIN_TRAIL_SIZE: number = 5;
	static readonly NUMBER_OF_INTERPOLATION: number = 5;
	static readonly EXTREME_NB_OF_INTERPOLATION: number = 500;
	static readonly NUMBER_OF_PLOTLINE_CALLS: number = 4;
	static readonly TEST_PATH: Vec2[] = [
		{ x: 0, y: 0 },
		{ x: 10, y: 1 },
		{ x: 5, y: 1 },
		{ x: 5, y: 6 },
		{ x: 5, y: 3 },
	];
	static readonly Y_AXIS_TEST_PATH: Vec2[] = [
		{ x: 0, y: 0 },
		{ x: 0, y: 5 },
	];
	static readonly INVERTED_TEST_PATH: Vec2[] = [
		{ x: 5, y: 0 },
		{ x: 0, y: 0 },
	];
	static readonly FAR_INTERPOLATION_POINTS: Vec2[] = [
		{ x: 0, y: 0 },
		{ x: 1000, y: 0 },
	];
	static readonly MOUSE_EVENTS: MouseEvent[] = [
		{ offsetX: 25, offsetY: 25, button: 0, buttons: 0 } as MouseEvent,
		{ offsetX: 25, offsetY: 25, button: 0, buttons: 1 } as MouseEvent,
		{ offsetX: 0, offsetY: 0, button: 0, buttons: 0 } as MouseEvent,
		{ offsetX: 1, offsetY: 0, button: 0 } as MouseEvent,
		{ offsetX: 25, offsetY: 25, button: 1 } as MouseEvent,
		{ offsetX: 44, offsetY: 25, button: 1 } as MouseEvent,
		{ pageX: 35, pageY: 25, button: 0 } as MouseEvent,
		{ pageX: 450, pageY: 25, button: 0 } as MouseEvent,
		{ pageX: 469, pageY: 25, button: 0 } as MouseEvent,
		{ offsetX: 470, offsetY: 25, button: 0 } as MouseEvent,
		{ pageX: 470, pageY: 25, button: 0 } as MouseEvent,
		{ x: 100, y: 100, button: 0 } as MouseEvent,
	];
	// constantes pour le bucket fill
	static SIZE_OF_DATA: number = 4;
	static PERCENTAGE_CONST: number = 100;
	static HEX_BASE: number = 16;
	static RANDOM_COLOR: { R: number; G: number; B: number; A: number } = {
		R: 255,
		G: 187,
		B: 204,
		A: 255,
	};
	static DUMMY_TOLERANCE: number = 20;
	// constante pour event manager
	static readonly REDO_EVENT: KeyboardEvent = new KeyboardEvent('keydown', { key: 'z', ctrlKey: true, shiftKey: true });
	static readonly UNDO_EVENT: KeyboardEvent = new KeyboardEvent('keydown', { key: 'z', ctrlKey: true, shiftKey: false });
	static readonly EXPORT_EVENT: KeyboardEvent = new KeyboardEvent('keydown', { key: 'e', ctrlKey: true, shiftKey: false });
	static readonly CARROUSEL_EVENT: KeyboardEvent = new KeyboardEvent('keydown', { key: 'g', ctrlKey: true, shiftKey: false });
	static readonly SAVE_EVENT: KeyboardEvent = new KeyboardEvent('keydown', { key: 's', ctrlKey: true, shiftKey: false });
	static readonly OPEN_EVENT: KeyboardEvent = new KeyboardEvent('keydown', { key: 'o', ctrlKey: true, shiftKey: false });
	// Constantes pour le color picker
	static readonly SELECTED_LINE_WIDTH: number = 5;
	static readonly SELECTED_RECTANGLE_HEIGHT: number = 10;
	static readonly RED_INDEX_HEX: number = 1;
	static readonly GREEN_INDEX_HEX: number = 3;
	static readonly BLUE_INDEX_HEX: number = 5;
	static readonly ALPHA_INDEX_HEX: number = 7;
	static readonly HEX_COLOR_LENGTH: number = 2;
	static readonly MAX_HEX_VALUE: number = 255;
	static readonly IMAGE_DATA_ALPHA_INDEX: number = 3;
	static readonly COLOR_HISTORY_COUNT: number = 10;
	static readonly UNDEFINED_COLOR: number = -1;
	// constantes pour aerosol
	static readonly SECOND_MS: number = 1000;
	static readonly TIME_DELAY: number = 25;
	static readonly MIN_SPRAY_SIZE: number = 10;
	// Constantes pour grille
	static readonly MAX_SQUARE_SIZE: number = 250;
	static readonly MIN_SQUARE_SIZE: number = 20;
	static readonly MAX_OPACITY: number = 100;
	static readonly MIN_OPACITY: number = 40;
	static readonly INCREMENT_VALUE: number = 5;
	static readonly KEYB_PLUS_EVENT: KeyboardEvent = new KeyboardEvent('keydown', { key: '+' });
	static readonly KEYB_MINUS_EVENT: KeyboardEvent = new KeyboardEvent('keydown', { key: '-' });
	static readonly KEYB_EQUAL_EVENT: KeyboardEvent = new KeyboardEvent('keydown', { key: '=' });
	// constantes pour la sélection
	static readonly TEST_PNG_URL: string = 'png,test';
	static readonly TEST_JPEG_URL: string = 'jpeg,test';
	// save and carrousel
	static readonly ETIQUETTE_MAX_VALUE: number = 15;
	static readonly LESS_THEN_THREE_DRAWING: number = 3;
	// save and carrousel testing
	static readonly ARROW_LEFT_EVENT: KeyboardEvent = new KeyboardEvent('keydown', { key: 'ArrowLeft' });
	static readonly ARROW_RIGHT_EVENT: KeyboardEvent = new KeyboardEvent('keydown', { key: 'ArrowRight' });
	static readonly DRAWING_TESTING: Dessin[] = [
		{ name: 'test1', etiquette: ['drole'] },
		{ name: 'test2', etiquette: ['test'] },
		{ name: 'test3', etiquette: ['test1'] },
		{ name: 'test4', etiquette: [] },
	];
	static readonly FICHE_INDEX_TESTING: number[] = [
		0, // drawing 0
		1, // drawing 1
		2, // drawing 2
		Global.LESS_THEN_THREE_DRAWING, // drawing 3
	];
	// Constantes pour texte
	static readonly DEFAULT_FONT_SIZE: number = 30;
	static readonly MIN_FONT_SIZE: number = 15;
	static readonly MAX_FONT_SIZE: number = 70;
	static readonly BASE_URL: string = 'http://localhost:3000/api/save/';
}
export enum MouseEnum {
	DEFAULT = 0,
	ENTER_DEFAULT = 1,
	TOP_LEFT = 2,
	ONE_OFF_X = 3,
	RIGHT_CLICK = 4,
	OFFSET_20 = 5,
	PAGE_REF = 6,
	PAGE_INNER_CANVAS = 7,
	PAGE_INNER_OFFSET20 = 8,
	PAGE_OFFSET_ONE_OFF = 9,
}
export enum MouseButton {
	Left = 0,
	Middle = 1,
	Right = 2,
	Back = 3,
	Forward = 4,
}
export enum RGB {
	R = 0,
	G = 1,
	B = 2,
	A = 3,
}
export enum Shortcut {
	CRAYON = 'c',
	LIGNE = 'l',
	EFFACE = 'e',
	RECT_SELECTION = 'r',
	ELLIPSE_SELECTION = 's',
	SURFACE_SELECTION = 'ctrl-a',
}
export enum EnumAngleLigne {
	CENTTRENTECINQ = 0,
	QUARANTECINQ = 1,
	VERTICAL = 2,
	HORIZONTAL = 3,
}
export enum Command {
	BACKSPACE = 'Backspace',
	SHIFT = 'Shift',
	ESCAPE = 'Escape',
	DELETE = 'Delete',
}
export enum Arrows {
	ARROWDOWN = 'ArrowDown',
	ARROWLEFT = 'ArrowLeft',
	ARROWRIGHT = 'ArrowRight',
	ARROWUP = 'ArrowUp',
}
export enum Fonts {
	Arial = 'Arial',
	Verdana = 'Verdana',
	Georgia = 'Georgia',
	TimesNewRoman = 'Times New Roman',
	ComicSans = 'Comic Sans MS',
}
export const stamps: string[] = [
	'assets/stamps/shrek.jpg',
	'assets/stamps/unsure-boy.jpg',
	'assets/stamps/cloud.png',
	'assets/stamps/poly.jpg',
	'assets/stamps/cool-guy.png',
];
export enum ControlPoint {
	Center,
	CenterLeft,
	CenterRight,
	CenterUp,
	CenterDown,
	CornerUpLeft,
	CornerDownLeft,
	CornerUpRight,
	CornerDownRight,
}
