import SectionHeader from '@/components/SectionHeader/SectionHeader.component';
import { DateUtil } from '@/util/type/DateUtil';

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
                    {DateUtil.toLocaleDateString(new Date('2012-09-01'))} -{' '}
                    {DateUtil.toLocaleDateString(new Date('2016-04-30'))}
                </div>
            </div>
        </section>
    );
}
