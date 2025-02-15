import { useDeferredValue } from "react";

import SectionHeader from "@sections/_shared/SectionHeader/SectionHeader.component";
import Default from "./Education.comopnent";

import ResumeAPI from "@api/Resume.api";
import Await from "@sections/_shared/Await.component";

export default function Education() {
	const education = useDeferredValue(ResumeAPI.getEducation());

	return (
		<section className="p-relative">
			<SectionHeader label="Education" />
			<Await
				promise={education}
				fallback={<Default.Skeleton />}
				resolver={(education) =>
					education.map((education) => (
						<Default.Component
							key={education.title + education.school}
							{...education}
						/>
					))
				}
			/>
		</section>
	);
}
