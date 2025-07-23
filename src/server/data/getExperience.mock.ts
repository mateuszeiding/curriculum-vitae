import type { IExperienceInput } from "@models/Experience/!Experience.dto";

export const getExperience: IExperienceInput[] = [
	{
		position: "Software Engineer",
		company: "TietoEVRY",
		startDate: new Date("2023-07-01"),
		bulletPoints: [
			{
				value: `Redesigned and optimized validation logic to prevent scheduling conflicts in recurring medication 
				dosages with varying repetition patterns.`,
				emphasis: [
					"Redesigned and optimized validation",
					"varying repetition patterns",
				],
			},
			{
				value: `Managed refactoring and rebranding of an application for task management. Moved most internal data states to
            loaders and routes to provide a more cloud-friendly solution and reduce prop drilling. Simplifications across
            the project resulted in ~30% code reduction.
            `,
				emphasis: ["Managed refactoring", "~30% code reduction"],
			},
			{
				value: `Joined the internship program as a mentor, providing guidance and support in frontend development 
            to ensure accurate design implementation. Helped make design concepts clear and understandable for 
            developers and encouraged effective collaboration between design and development teams.
            `,
				emphasis: [
					"mentor",
					"ensure accurate design",
					"effective collaboration",
				],
			},
			{
				value: `Together with the design team, planned a new department-wide design system. Based on prepared Figma documentation,
            built libraries that include a style framework, web components, and font-glyphs that were
            later used in over 20 projects.`,
				emphasis: ["department-wide design system", "over 20 projects"],
			},
			{
				value: `Refactored backend structure by cleaning up endpoint definitions, route naming, HTTP methods, and response 
				codes in the main API. Introduced an abstract service manager to resolve context-specific services in a CQRS-based 
				setup. Also redesigned and consolidated DTOs and interfaces to improve consistency, reduce duplication, and make 
				the codebase easier to work with.`,
				emphasis: ["redesigned and consolidated DTOs", "Refactored"],
			},
		],
	},
	{
		position: "Junior Software Engineer",
		company: "TietoEVRY",
		startDate: new Date("2021-09-01"),
		endDate: new Date("2023-06-30"),
		bulletPoints: [
			{
				value: `Reassigned to a new team to provide frontend expertise. Implemented a feature for managing
            deeply nested data structures and shared knowledge with team members to improve their frontend skills.`,
				emphasis: ["shared knowledge"],
			},
			{
				value: `Took care of the frontend in a transferred project. Worked closely with the PO and designer to 
            create a cleaner UI and improve UX, contributing to a significant increase in customer interest.`,
				emphasis: ["significant increase"],
			},
			{
				value:
					"Developed a .NET REST API for the Oslo municipality, enabling external systems to integrate seamlessly.",
			},
		],
	},
	{
		position: "Intern Software Engineer",
		company: "TietoEVRY",
		startDate: new Date("2021-07-01"),
		endDate: new Date("2021-08-31"),
		bulletPoints: [
			{
				value:
					"Collaborated within a team of 10 interns on an internal application for gathering analytics data.",
			},
		],
	},
	{
		position: "Personal",
		company: "TietoEVRY",
		startDate: null,
		bulletPoints: [
			{
				value: "Solved most of 2024 Advent of Code challenges in Rust.",
				emphasis: ["Rust"],
			},
			{
				value:
					"Currently learning cybersecurity through TryHackMe structured learning paths",
				emphasis: ["cybersecurity"],
			},
		],
	},
];
