import SectionHeader from '@/components/SectionHeader/SectionHeader.component';
import { DateUtil } from '@/util/type/DateUtil';
import { StringUtil } from '@/util/type/StringUtil';

export default function Certificates() {
    return (
        <section className='p-relative'>
            <SectionHeader label='certrificates' />
            {certificates.map((certificate, i) => (
                <Certificate
                    key={i}
                    {...certificate}
                />
            ))}
        </section>
    );
}

type CertificateProps = {
    name: string;
    startDate: Date;
    link?: string;
    endDate?: Date;
};

function Certificate({
    name,
    startDate,
    endDate,
    link,
}: Readonly<CertificateProps>) {
    return (
        <div className='mb-4'>
            <div className='row fs-sm fw-medium'>
                <div className='col-2'>
                    <a
                        target='_blank'
                        href={link}>
                        {name}
                    </a>
                </div>
                <div className='col-1 fw-regular text-end'>
                    {StringUtil.range(
                        DateUtil.toLocaleDateString(startDate),
                        !endDate
                            ? 'No Expiration'
                            : DateUtil.toLocaleDateString(endDate)
                    )}
                </div>
            </div>
        </div>
    );
}

const certificates: CertificateProps[] = [
    {
        name: 'Professional Scrum Master I (PSM I)',
        link: 'https://www.credly.com/badges/175db99c-c1be-4ecd-a6c4-e6d8f4738d55',
        startDate: new Date('2022-05-01'),
    },
];
