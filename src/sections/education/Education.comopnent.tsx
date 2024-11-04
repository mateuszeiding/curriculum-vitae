import { EducationDto } from '@/models/Education.dto';
import { DateUtil } from '@/util/type/DateUtil';
import { StringUtil } from '@/util/type/StringUtil';

type EducationComponentProps = EducationDto;

export default {
    Skeleton: () => (
        <div className='d-flex justify-content-between'>
            <div className='skeleton w-25'></div>
            <div className='skeleton w-25'></div>
            <div className='skeleton w-25'></div>
        </div>
    ),
    Component: function ({
        title,
        school,
        startDate,
        endDate,
    }: Readonly<EducationComponentProps>) {
        return (
            <div className='row fs-sm fw-medium'>
                <div className='col-2 '>{title}</div>
                <div className='col-2 text-center underline'>{school}</div>
                <div className='col-2 fw-regular text-end'>
                    {StringUtil.range(
                        DateUtil.to2digMMNumericYYYY(startDate),
                        DateUtil.to2digMMNumericYYYY(endDate)
                    )}
                </div>
            </div>
        );
    },
};
