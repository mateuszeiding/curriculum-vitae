import Await from "@sections/_shared/Await.component";
import SectionHeader from "@sections/_shared/SectionHeader/SectionHeader.component";

import ResumeAPI from "@api/Resume.api";
import { useDeferredValue } from "react";
import Default from "./Experience.component";

export default function Experience() {
	const experience = useDeferredValue(ResumeAPI.getExperience());

	return (
		<section className="p-relative">
			<SectionHeader label="Experience" />
			<Await
				promise={experience}
				fallback={<Default.Skeleton />}
				resolver={(experience) =>
					experience.map((experience, i, arr) => (
						<Default.Component
							key={experience.company + experience.position}
							{...experience}
							{...(arr[i - 1]?.company === experience.company && {
								...{ company: "" },
							})}
						/>
					))
				}
			/>
		</section>
	);
}
