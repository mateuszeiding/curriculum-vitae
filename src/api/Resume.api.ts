import { SkillDto } from '@/models/Skill.dto';
import APIBase from './!APIBase';

export default class ResumeAPI {
    static SkillType: {
        framework: 'framework';
        language: 'language';
        tool: 'tool';
    };

    static async getSkills(
        type: typeof ResumeAPI.SkillType
    ): Promise<SkillDto> {
        return APIBase.get<SkillDto>('/api/list/skill/' + type);
    }
}
