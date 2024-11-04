interface IExperienceDto {
    position: string;
    company: string;
    startDate: Date;
    endDate?: Date;
    bulletPoints: string[];
}

export class ExperienceDto implements IExperienceDto {
    position: string = '';
    company: string = '';
    startDate: Date = new Date();
    endDate?: Date = new Date();
    bulletPoints: string[] = [];

    constructor(object: Partial<IExperienceDto>) {
        Object.assign(this, object);
    }
}
