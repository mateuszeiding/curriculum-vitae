import { SkillDto } from '@/models/Skill.dto';
import APIBase from './!APIBase';
import { CertificateDto } from '@/models/Certificate.dt';

export default class ResumeAPI {
    static BaseUrl = window.origin + '/api/resume';
    static SkillType: {
        framework: 'framework';
        language: 'language';
        tool: 'tool';
    };

    static async getSkills(
        type: typeof ResumeAPI.SkillType
    ): Promise<SkillDto> {
        return APIBase.get<SkillDto>(ResumeAPI.BaseUrl + '/list/skill/' + type);
    }

    static async getCertificates(): Promise<CertificateDto[]> {
        return APIBase.get<CertificateDto[]>(
            ResumeAPI.BaseUrl + '/list/certificate'
        );
    }
}
