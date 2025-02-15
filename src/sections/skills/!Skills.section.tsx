import ResumeAPI from "@api/Resume.api";
import type { SkillDto } from "@models/Skill.dto";
import Await from "@sections/_shared/Await.component";
import { useDeferredValue } from "react";
import Default from "./Skill.component";
import { SkillEnum } from "./Skill.enum";

const createSkillPromises = () => {
	const skillPromises: Record<SkillEnum, Promise<SkillDto>> = Object.create(
		null,
	);

	for (const skillKey in SkillEnum) {
		const key = skillKey as keyof typeof SkillEnum;
		skillPromises[key] = ResumeAPI.getSkills(SkillEnum[key]);
	}

	return skillPromises;
};

export default function Skills() {
	const skills = useDeferredValue(createSkillPromises());

	return (
		<section className="row row-gap-5 p-relative">
			{Object.keys(SkillEnum).map((skillKey: string) => {
				const key = skillKey as keyof typeof SkillEnum;

				return (
					<Await
						key={skillKey}
						promise={skills[key]}
						fallback={Default.Skeleton(SkillEnum[key])}
						resolver={(skill) => (
							<Default.Component title={skillKey} {...skill} />
						)}
					/>
				);
			})}
		</section>
	);
}
