import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import Links from "./sections/Links.section";
import Certificates from "./sections/certificates/!Certificates.section";
import Education from "./sections/education/!Education.section";
import Experience from "./sections/experience/!Experience.section";
import PersonalInfo from "./sections/personalInfo/!PersonalInfo.section";
import Skills from "./sections/skills/!Skills.section";

export default function Resume() {
	const contentRef = useRef<HTMLDivElement>(null);
	const reactToPrintFn = useReactToPrint({ contentRef });

	return (
		<>
			{import.meta.env.DEV && (
				<button type="button" onClick={() => reactToPrintFn()}>
					Print
				</button>
			)}
			<main
				ref={contentRef}
				className="container bg-paper d-flex flex-column row-gap-3"
			>
				<Links />
				<PersonalInfo />
				<Skills />
				<Experience />
				<Certificates />
				<Education />
			</main>
		</>
	);
}
