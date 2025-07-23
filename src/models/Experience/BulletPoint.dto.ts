import { createElement, type ReactNode } from "react";

export interface IBulletPointDto {
	Value: ReactNode[];
}

export interface IBulletPointInput {
	value: string;
	emphasis?: string[];
}

export class BulletPointDto implements IBulletPointDto {
	private _value;
	private _emphasis?: string[];

	constructor(object: Partial<IBulletPointInput>) {
		this._value = object.value ?? "";
		this._emphasis = object.emphasis ?? [];
	}

	get Value() {
		if (!this._emphasis?.length) {
			return [this._value] satisfies ReactNode[];
		}

		const parts: ReactNode[] = [];
		const regex = new RegExp(`(${this._emphasis.join("|")})`, "gi");

		let lastIndex = 0;

		const text = this._value;

		text.replace(regex, (match, _group, offset) => {
			if (lastIndex < offset) {
				parts.push(text.slice(lastIndex, offset));
			}
			parts.push(createElement("b", { key: offset }, match));
			lastIndex = offset + match.length;
			return match;
		});

		if (lastIndex < text.length) {
			parts.push(text.slice(lastIndex));
		}

		return parts;
	}
}
