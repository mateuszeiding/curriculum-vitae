import { DateUtil } from '@/util/type/DateUtil';
import { StringUtil } from '@/util/type/StringUtil';

export type CertificateProps = {
    name: string;
    startDate: Date;
    link?: string;
    endDate?: Date;
};

export default {
    Skeletion: () => (
        <div className='row row-gap-2 d-flex justify-content-between'>
            <div className='col'>
                <div className='skeleton w-sm-50 w-lg-50'></div>
            </div>
            <div className='col-sm-6 col-lg-2 d-flex justify-content-lg-end justify-content-sm-start'>
                <div className='skeleton w-sm-25 w-lg-50'></div>
            </div>
        </div>
    ),
    Component: function ({
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
                    <div className='col-lg-2 col-print-2 col-sm-6 fw-regular text-lg-end text-print-end text-sm-start'>
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
    },
};
