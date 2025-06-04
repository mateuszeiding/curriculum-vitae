interface IExperienceDto {
	position: string;
	company: string;
	startDate: Date | null;
	endDate?: Date;
	bulletPoints: string[];
}

export class ExperienceDto implements IExperienceDto {
	position = "";
	company = "";
	startDate: Date | null = new Date();
	endDate?: Date = new Date();
	bulletPoints: string[] = [];

	constructor(object: Partial<IExperienceDto>) {
		Object.assign(this, object);
	}
}
