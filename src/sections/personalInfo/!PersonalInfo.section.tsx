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
                    <div className='fs-xs d-flex column-gap-3'>
                        <a
                            href={
                                phone &&
                                'tel:' +
                                    phone
                                        .replaceAll(' ', '')
                                        .replaceAll('-', '')
                            }>
                            {import.meta.env.VITE_PHONE ?? 'phone'}
                        </a>
                        <div className='v-divider'></div>
                        <a href={email && 'mailto:' + email}>
                            {email ?? 'email'}
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
