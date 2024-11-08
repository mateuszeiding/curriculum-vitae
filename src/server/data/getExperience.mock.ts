import { ExperienceDto } from '@/models/Experience.dto';

export const getExperience: ExperienceDto[] = [
    {
        position: 'Software Engineer',
        company: 'TietoEVRY',
        startDate: new Date('2023-07-01'),
        bulletPoints: [
            `Managed refactoring and rebranding of an application for task management. Moved most internal data states to
            loaders and routes to provide a more cloud-friendly solution and reduce prop drilling. Simplifications across
            the project resulted in ~30% code reduction.
            `,
            `Contributed to various frontend projects, implementing new features, rebranding, and optimizing code. Refined 
            design and structure for a cleaner, cohesive, and appealing interface.`,
            `Joined the internship program as a mentor, providing guidance and support in frontend development 
            to ensure accurate design implementation. Helped make design concepts clear and understandable for 
            developers and encouraged effective collaboration between design and development teams.
            `,
            `Together with the design team, planned a new department-wide design system. Based on prepared Figma documentation,
            built libraries that include a style framework, web components, and font-glyphs that were
            later used in over 20 projects.`,
        ],
    },
    {
        position: 'Junior Software Engineer',
        company: 'TietoEVRY',
        startDate: new Date('2021-09-01'),
        endDate: new Date('2023-06-30'),
        bulletPoints: [
            `Reassigned to a new team to provide frontend expertise. Implemented a feature for managing
            deeply nested data structures and shared knowledge with team members to improve their frontend skills.`,
            `Took care of the frontend in a transferred project. Worked closely with the PO and designer to 
            create a cleaner UI and improve UX, contributing to a significant increase in customer interest.`,
            `Developed a .NET REST API used by the Oslo municipality for seamless data integration
            with external software applications.`,
        ],
    },
    {
        position: 'Intern Software Engineer',
        company: 'TietoEVRY',
        startDate: new Date('2021-07-01'),
        endDate: new Date('2021-08-31'),
        bulletPoints: [
            `Collaborated within a team of 10 interns on an internal application for gathering analytics data.`,
        ],
    },
];
