interface IEducationDto {
    title: string;
    school: string;
    startDate: Date;
    endDate?: Date;
}

export class EducationDto implements IEducationDto {
    title: string = '';
    school: string = '';
    startDate: Date = new Date();
    endDate: Date = new Date();

    constructor(object: Partial<IEducationDto>) {
        Object.assign(this, object);
    }
}
