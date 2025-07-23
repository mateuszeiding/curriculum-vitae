import {
	BulletPointDto,
	type IBulletPointDto,
	type IBulletPointInput,
} from "./BulletPoint.dto";

interface IExperienceBase {
	position: string;
	company: string;
	startDate: Date | null;
	endDate?: Date;
}

interface IExperienceDto extends IExperienceBase {
	bulletPoints: IBulletPointDto[];
}

export interface IExperienceInput extends IExperienceBase {
	bulletPoints: IBulletPointInput[];
}

export class ExperienceDto implements IExperienceDto {
	position = "";
	company = "";
	startDate: Date | null = new Date();
	endDate?: Date = new Date();
	bulletPoints: BulletPointDto[] = [];

	constructor(object: Partial<IExperienceInput>) {
		Object.assign(this, object);

		if (object.bulletPoints) {
			this.bulletPoints = object.bulletPoints.map(
				(bp) => new BulletPointDto(bp),
			);
		}
	}
}
