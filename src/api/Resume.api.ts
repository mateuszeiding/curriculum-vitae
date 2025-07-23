import APIBase from "./!APIBase";

import type { CertificateDto } from "@models/Certificate.dto";
import type { EducationDto } from "@models/Education.dto";
import {
	ExperienceDto,
	type IExperienceInput,
} from "@models/Experience/!Experience.dto";
import type { SkillDto } from "@models/Skill.dto";
import type { SkillEnum } from "@sections/skills/Skill.enum";

const baseUrl = `${window.origin}/api/resume`;

async function getSkills(type: SkillEnum): Promise<SkillDto> {
	return APIBase.get<SkillDto>(`${baseUrl}/skill/${type}`);
}

async function getCertificates(): Promise<CertificateDto[]> {
	return APIBase.get<CertificateDto[]>(`${baseUrl}/certificate/list`);
}

async function getEducation(): Promise<EducationDto[]> {
	return APIBase.get<EducationDto[]>(`${baseUrl}/education/list`);
}

async function getExperience(): Promise<ExperienceDto[]> {
	const promise = APIBase.get<IExperienceInput[]>(`${baseUrl}/experience/list`);

	return promise.then((v) => v.map((e) => new ExperienceDto(e)));
}

export default { getSkills, getCertificates, getEducation, getExperience };
