import SectionHeader from '@/components/SectionHeader.component';

export default function Languages() {
    return (
        <section>
            <SectionHeader
                labels={['Languages']}
                reverse
            />
            {languages.map((lang) => (
                <Language
                    key={lang.name}
                    {...lang}
                />
            ))}
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
