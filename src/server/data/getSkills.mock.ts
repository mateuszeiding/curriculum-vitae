import { SkillEnum } from '@/sections/skills/Skill.enum';
import { SkillDto } from '@/models/Skill.dto';

export const getSkills: Record<keyof typeof SkillEnum, SkillDto> = {
    [SkillEnum.frameworks]: {
        main: ['React', 'React Router', 'Bootstrap', 'Vitest', 'Sass'],
        secondary: ['Vue3', 'Angular2', '.NET', 'REST', 'Stencil.js'],
    },
    [SkillEnum.languages]: {
        main: ['Javascript', 'Typescript', 'HTML', 'CSS'],
        secondary: ['C#', 'T-SQL'],
    },
    [SkillEnum.tools]: {
        main: ['Vite', 'Figma', 'Zod', 'Docker', 'ESLint', 'Git'],
        secondary: ['Azure DevOps', 'Webpack', 'Storybook', 'NPM Registry'],
    },
};
