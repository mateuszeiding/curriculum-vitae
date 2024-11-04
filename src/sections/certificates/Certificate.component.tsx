import { DateUtil } from '@/util/type/DateUtil';
import { StringUtil } from '@/util/type/StringUtil';

export type CertificateProps = {
    name: string;
    startDate: Date;
    link?: string;
    endDate?: Date;
};

export default function Certificate({
    name,
    startDate,
    endDate,
    link,
}: Readonly<CertificateProps>) {
    return (
        <div className='mb-4'>
            <div className='row fs-sm fw-medium'>
                <div className='col'>
                    <a
                        target='_blank'
                        href={link}>
                        {name}
                    </a>
                </div>
                <div className='col-2 fw-regular text-end'>
                    {StringUtil.range(
                        DateUtil.to2digMMNumericYYYY(startDate),
                        !endDate
                            ? 'No Exp.'
                            : DateUtil.to2digMMNumericYYYY(endDate)
                    )}
                </div>
            </div>
        </div>
    );
}
