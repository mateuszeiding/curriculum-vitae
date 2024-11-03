interface ISkillDto {
    main: string[];
    secondary: string[];
}

export class SkillDto implements ISkillDto {
    main: string[] = [];
    secondary: string[] = [];

    constructor(object: Partial<ISkillDto>) {
        Object.assign(this, object);
    }
}
