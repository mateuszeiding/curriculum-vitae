import SectionHeader from '@/sections/_shared/SectionHeader/SectionHeader.component';

import Certificate from './Certificate.component';
import ResumeAPI from '@/api/Resume.api';
import { CertificateDto } from '@/models/Certificate.dto';
import Await from '../_shared/Await.component';
import { useDeferredValue } from 'react';

export default function Certificates() {
    const certificates = useDeferredValue(ResumeAPI.getCertificates());

    return (
        <section className='p-relative'>
            <SectionHeader label='certrificates' />
            <Await
                fallback={<Certificate.Skeletion />}
                promise={certificates}
                resolver={(certificates: CertificateDto[]) =>
                    certificates.map((certificate, i) => (
                        <Certificate.Component
                            key={i}
                            {...certificate}
                        />
                    ))
                }
            />
        </section>
    );
}
