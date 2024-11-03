import SectionHeader from '@/sections/_shared/SectionHeader/SectionHeader.component';
import { DateUtil } from '@/util/type/DateUtil';
import { StringUtil } from '@/util/type/StringUtil';

export default function Education() {
    return (
        <section className='p-relative'>
            <SectionHeader label='Education' />
            <div className='row fs-sm fw-medium'>
                <div className='col-1 '>IT Technican</div>
                <div className='col-1 text-center underline'>
                    Technikum Zawodowe Zdroje
                </div>
                <div className='col-1 fw-regular text-end'>
                    {StringUtil.range(
                        DateUtil.to2digMMNumericYYYY(new Date('2012-09-01')),
                        DateUtil.to2digMMNumericYYYY(new Date('2016-04-30'))
                    )}
                </div>
            </div>
        </section>
    );
}
