import { DateUtil } from '../util/type/DateUtil';

export default function Experience() {
    return (
        <>
            <div className='row p-relative'>
                <hr />
                <div className='col z-2 d-flex flex-column bg-ghost-white'>
                    <div className='fw-medium tx-dark-cerulean pe-4 mb-3'>
                        Experience
                    </div>
                </div>
            </div>
            {experienceData.map((experience, i, arr) => (
                <ExperiencePerPosition
                    key={i}
                    {...experience}
                    {...(arr[i - 1]?.company === experience.company && {
                        ...{ company: '' },
                    })}
                />
            ))}
        </>
    );
}

type ExperiencePerPositionProps = {
    position: string;
    company: string;
    startDate: Date;
    endDate: Date | 'Current';
    bulletPoints: string[];
};

function ExperiencePerPosition({
    position,
    company,
    startDate,
    endDate,
    bulletPoints,
}: Readonly<ExperiencePerPositionProps>) {
    return (
        <div className='mb-4'>
            <div className='row fs-sm fw-medium'>
                <div className='col-1 '>{position}</div>
                <div className='col-1 text-center underline'>{company}</div>
                <div className='col-1 fw-regular text-end'>
                    {DateUtil.toLocaleDateString(startDate)} -{' '}
                    {typeof endDate === 'string'
                        ? endDate
                        : DateUtil.toLocaleDateString(endDate)}
                </div>
            </div>
            <div className='row'>
                <div className='col-1'>
                    <ul>
                        {bulletPoints.map((bulletPoint, i) => (
                            <li key={i}>{bulletPoint}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

const experienceData: ExperiencePerPositionProps[] = [
    {
        position: 'Software Engineer',
        company: 'TietoEVRY',
        startDate: new Date('2023-08-01'),
        endDate: 'Current',
        bulletPoints: [
            `Refactored a React JS solution to align it with design specifications and improve its
            structure. Applied React Router Data API to simplify maintenance and enhance UI
            responsiveness.`,
            `Implemented a new design system in one of the React JS application modules. Converted
            reusable class components to functional headless components to share business logic across
            both new and existing UI.`,
            `Worked on a new design system using web components for framework agnosticism, with
            customized Bootstrap as the style framework.`,
            `Joined the team to assist in developing of an application using VueJS, providing frontend
            development expertise. Proposed and managed the refactoring of two similar APIs
            working with different data sets, improving their structure and consistency.`,
        ],
    },
    {
        position: 'Junior Software Engineer',
        company: 'TietoEVRY',
        startDate: new Date('2021-09-01'),
        endDate: new Date('2023-08-01'),
        bulletPoints: [
            `Led the team in enhancing a product acquired from another team, featuring a web
            frontend in ReactJS and a mobile frontend using Angular with Ionic elements.`,
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
            `Mentored interns for two months within a SCRUM team, utilizing VueJS, .NET, and
            Azure Portal.`,
        ],
    },
];