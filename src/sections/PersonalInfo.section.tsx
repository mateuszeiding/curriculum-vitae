import SectionHeader from '@/components/SectionHeader/SectionHeader.component';

export default function PersonalInfo() {
    const phone = import.meta.env.VITE_PHONE;
    const email = import.meta.env.VITE_EMAIL;
    return (
        <section className='p-relative'>
            <SectionHeader label='Personal Info' />
            <div className='row'>
                <div className='col-2'>
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
                <div className='col-1'>
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

type LanguageProps = { name: string; level: string };

function Language({ name, level }: Readonly<LanguageProps>) {
    return (
        <div className='row fs-sm fw-medium'>
            <div className='col-1 d-flex justify-content-end'>
                {level} {name}
            </div>
        </div>
    );
}

const languages: LanguageProps[] = [
    { name: 'PL', level: 'Native' },
    { name: 'EN', level: 'B2' },
];
