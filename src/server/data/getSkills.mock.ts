import type { SkillDto } from "@models/Skill.dto";
import { SkillEnum } from "@sections/skills/Skill.enum";

export const getSkills: Record<keyof typeof SkillEnum, SkillDto> = {
	[SkillEnum.frontend]: {
		main: [
			"React.js",
			"React Router",
			"Bootstrap",
			"SCSS",
			"HTML5",
			"Javascript",
			"Typescript",
		],
		secondary: ["Stencil.js", "Angular12+", "Vue3", "Vitest"],
	},
	[SkillEnum.backend]: {
		main: [".NET Core", "C#", "SQL", "Entity Framework Core", "LINQ"],
		secondary: ["REST API", "CQRS", "Repository pattern", "NUnit"],
	},
	[SkillEnum.other]: {
		main: [
			"Git",
			"Azure DevOps",
			"Vite",
			"Figma",
			"Webpack",
			"ESLint",
			"SonarQube",
			"StoryBook",
			"Swagger",
		],
		secondary: ["Vim motions", "Docker", "NPM Registry", "WSL", "Biome.js"],
	},
};
