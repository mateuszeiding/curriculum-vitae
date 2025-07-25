import type { EducationDto } from "@models/Education.dto";

export const getEducation: EducationDto[] = [
	{
		title: "IT Technician",
		school: "Technikum Zawodowe Zdroje",
		startDate: new Date("2012-09-01"),
		endDate: new Date("2016-04-30"),
	},
];
