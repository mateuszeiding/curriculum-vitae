import SectionHeader from '@/sections/_shared/SectionHeader/SectionHeader.component';

import { languages } from './languages.mock';
import Language from './language.component';

export default function PersonalInfo() {
    const phone = import.meta.env.VITE_PHONE;
    const email = import.meta.env.VITE_EMAIL;

    return (
        <section className='p-relative'>
            <SectionHeader label='Personal Info' />
            <div className='row'>
                <div className='col-4'>
                    <div className='uppercase fw-medium fs-sm'>
                        Mateusz Eiding
                    </div>
                    <div className='fs-xs d-flex flex-sm-column flex-print-row column-gap-3'>
                        <a href={email && 'mailto:' + email}>
                            {email ?? 'email'}
                        </a>
                        <div className='v-divider d-sm-none d-print-block'></div>
                        <a
                            href={
                                phone &&
                                'tel:' +
                                    phone
                                        .replaceAll(' ', '')
                                        .replaceAll('-', '')
                            }>
                            {phone ?? 'phone'}
                        </a>
                    </div>
                    <div className='fs-xs'>Poland, Szczecin</div>
                </div>
                <div className='col-2'>
                    {languages.map((lang) => (
                        <Language
                            key={lang.name}
                            {...lang}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
