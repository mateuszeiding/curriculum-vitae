import { DateUtil } from '@/util/type/DateUtil';
import { StringUtil } from '@/util/type/StringUtil';

export type ExperiencePerPositionProps = {
    position: string;
    company: string;
    startDate: Date;
    endDate?: Date;
    bulletPoints: string[];
};

export default function ExperiencePerPosition({
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
                {company && (
                    <div className='col-1 text-center underline'>{company}</div>
                )}
                <div className='col-1 fw-regular text-end'>
                    {StringUtil.range(
                        DateUtil.toLocaleDateString(startDate),
                        !endDate
                            ? 'Current'
                            : DateUtil.toLocaleDateString(endDate)
                    )}
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
