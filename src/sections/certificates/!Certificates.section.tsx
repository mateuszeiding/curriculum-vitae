import SectionHeader from '@/components/SectionHeader/SectionHeader.component';

import { certificates } from './certificates.mock';
import Certificate from './Certificate.component';

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
