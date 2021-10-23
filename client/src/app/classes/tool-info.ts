export class ToolInfo {
	name: string;
	buttonText: string;
	shortcut: string;

	constructor(name: string, buttonText: string, shortcut: string) {
		this.name = name;
		this.buttonText = buttonText;
		this.shortcut = shortcut;
	}
}
