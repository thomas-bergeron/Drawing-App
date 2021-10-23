export class Queue<T> {
	store: T[] = [];
	push(val: T): void {
		this.store.push(val);
	}
	pop(): T | undefined {
		return this.store.shift();
	}
	get length(): number {
		return this.store.length;
	}
}
