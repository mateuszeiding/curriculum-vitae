import { ExperienceDto } from '@/models/Experience.dto';

export const getExperience: ExperienceDto[] = [
    {
        position: 'Software Engineer',
        company: 'TietoEVRY',
        startDate: new Date('2023-07-01'),
        bulletPoints: [
            `Managed refactoring and rebranding of application for task management. Moved most of internal data states to
            loaders and routes to provide more cloud-friendly solution and reduce prop drilling. Simplifications taken across
            the project resulted in ~30% code reduction.
            `,
            `Contributed to various projects to support frontend development, including implementing new features, rebranding, 
            and optimizing existing frontend code. Worked to refine the frontend design and code structure, ensuring a clean, 
            cohesive, and visually appealing interface.`,
            `Joined the internship program as a mentor, providing guidance and support in frontend development 
            to ensure accurate design implementation. Helped make design concepts clear and understandable for 
            developers and encouraged effective collaboration between design and development teams.
            `,
            `Together with the designers team planned new department-wide design system. Basing on prepared Figma documentation
            built libraries that include style framework, web components and font-glyphs that were
            later used in over 20 projects.`,
        ],
    },
    {
        position: 'Junior Software Engineer',
        company: 'TietoEVRY',
        startDate: new Date('2021-09-01'),
        endDate: new Date('2023-06-30'),
        bulletPoints: [
            `Reassigned to a new team to provide frontend expertise. Implemented feature for managing
            deeply nested data structures. Shared knowledge with team members to improve their frontend skills.`,
            `Took care of frontend in a transferred project. Worked closely with PO and Designer to 
            provide a cleaner UI and better UX, which contributed to a significant increase 
            in customer interest.`,
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
            `Worked within the team of 10 interns on internal application for gathering analitycs data.`,
        ],
    },
];
