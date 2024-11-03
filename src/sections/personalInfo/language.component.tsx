export type LanguageProps = { name: string; level: string };

export default function Language({ name, level }: Readonly<LanguageProps>) {
    return (
        <div className='row fs-sm fw-medium'>
            <div className='col-1 d-flex justify-content-end'>
                {level} {name}
            </div>
        </div>
    );
}
