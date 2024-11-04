import { ExperienceDto } from '@/models/Experience.dto';
import { DateUtil } from '@/util/type/DateUtil';
import { StringUtil } from '@/util/type/StringUtil';

export type ExperiencePerPositionProps = ExperienceDto;

export default {
    Skeleton: () => (
        <div>
            <div className='d-flex justify-content-between mb-4'>
                <div className='skeleton w-25'></div>
                <div className='skeleton w-25'></div>
                <div className='skeleton w-25'></div>
            </div>
            <ul>
                <li>
                    <div className='skeleton w-100 mt-1 mb-2'></div>
                    <div className='skeleton w-75'></div>
                </li>
            </ul>
        </div>
    ),
    Component: function ({
        position,
        company,
        startDate,
        endDate,
        bulletPoints,
    }: Readonly<ExperiencePerPositionProps>) {
        return (
            <div className='mb-4'>
                <div className='row fs-sm fw-medium'>
                    <div className='col '>{position}</div>
                    {company && (
                        <div className='col-2 text-center underline'>
                            {company}
                        </div>
                    )}
                    <div className='col-2 fw-regular text-end'>
                        {StringUtil.range(
                            DateUtil.to2digMMNumericYYYY(startDate),
                            !endDate
                                ? 'Current'
                                : DateUtil.to2digMMNumericYYYY(endDate)
                        )}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <ul>
                            {bulletPoints.map((bulletPoint, i) => (
                                <li key={i}>{bulletPoint}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    },
};
