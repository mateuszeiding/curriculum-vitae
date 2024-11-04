import { ExperienceDto } from '@/models/Experience.dto';
import { DateUtil } from '@/util/type/DateUtil';
import { StringUtil } from '@/util/type/StringUtil';

export type ExperiencePerPositionProps = ExperienceDto;

export default {
    Skeleton: () => (
        <div>
            <div className='row row-gap-2 mb-4'>
                <div className='col'>
                    <div className='skeleton w-sm-100 w-lg-75'></div>
                </div>
                <div className='col-lg-2 col-sm-4 d-flex justify-content-lg-center justify-content-sm-end'>
                    <div className='skeleton w-sm-50 w-lg-75'></div>
                </div>
                <div className='col-lg-2 col-sm-6 d-flex justify-content-lg-end justify-content-sm-start'>
                    <div className='skeleton w-sm-25 w-lg-50'></div>
                </div>
            </div>
            <ul className='row'>
                <li className='col-6'>
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
                    <div className='col-lg-2 col-sm-3'>{position}</div>
                    <div className='col-lg-2 col-sm-3 text-lg-center text-sm-end underline'>
                        {company}
                    </div>
                    <div className='col-lg-2 col-sm-6 fw-regular text-lg-end text-sm-start'>
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
