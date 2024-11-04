import { ExperienceDto } from '@/models/Experience.dto';

export const getExperience: ExperienceDto[] = [
    {
        position: 'Software Engineer',
        company: 'TietoEVRY',
        startDate: new Date('2023-07-01'),
        bulletPoints: [
            `Refactoring heheh`,
            `Together with the designers team planned department-wide rebranding. Basing on Figma documentation
            built libraries that include new design new system as style framework, web components and font-glyphs that were
            later used in over 20 projects.`,
        ],
    },
    {
        position: 'Junior Software Engineer',
        company: 'TietoEVRY',
        startDate: new Date('2021-07-31'),
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
