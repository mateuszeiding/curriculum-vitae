import APIBase from "./!APIBase";

import type { CertificateDto } from "@models/Certificate.dto";
import type { EducationDto } from "@models/Education.dto";
import type { ExperienceDto } from "@models/Experience.dto";
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
	return APIBase.get<ExperienceDto[]>(`${baseUrl}/experience/list`);
}

export default { getSkills, getCertificates, getEducation, getExperience };
