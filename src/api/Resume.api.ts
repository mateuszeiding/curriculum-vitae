import APIBase from './!APIBase';

import { SkillDto } from '@/models/Skill.dto';
import { CertificateDto } from '@/models/Certificate.dto';
import { EducationDto } from '@/models/Education.dto';
import { ExperienceDto } from '@/models/Experience.dto';
import { SkillEnum } from '@/sections/skills/Skill.enum';

export default class ResumeAPI {
    static BaseUrl = window.origin + '/api/resume';

    static async getSkills(type: SkillEnum): Promise<SkillDto> {
        return APIBase.get<SkillDto>(ResumeAPI.BaseUrl + '/skill/' + type);
    }

    static async getCertificates(): Promise<CertificateDto[]> {
        return APIBase.get<CertificateDto[]>(
            ResumeAPI.BaseUrl + '/certificate/list'
        );
    }

    static async getEducation(): Promise<EducationDto[]> {
        return APIBase.get<EducationDto[]>(
            ResumeAPI.BaseUrl + '/education/list'
        );
    }

    static async getExperience(): Promise<ExperienceDto[]> {
        return APIBase.get<ExperienceDto[]>(
            ResumeAPI.BaseUrl + '/experience/list'
        );
    }
}
