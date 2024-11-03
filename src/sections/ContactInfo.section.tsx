import linkedin from '@assets/linkedin.png';
import github from '@assets/github-dark.png';

export default function ContactInfo() {
    const imgHeight =
        parseFloat(getComputedStyle(document.documentElement).fontSize) * 1.6;
    return (
        <>
            <div className='row mb-5'>
                <div className='col-1 d-flex justify-content-end align-items-center fs-xs'>
                    <a
                        href={
                            'tel:' +
                            ((import.meta.env.VITE_PHONE as string | undefined)
                                ?.replaceAll(' ', '')
                                .replaceAll('-', '') ?? undefined)
                        }>
                        {import.meta.env.VITE_PHONE ?? 'undefined'}
                    </a>
                </div>
                <div className='v-divider'></div>
                <div className='col d-flex justify-content-center uppercase fw-medium fs-sm'>
                    Mateusz Eiding
                </div>
                <div className='v-divider'></div>
                <div className='col-1 d-flex align-items-center fs-xs'>
                    <a
                        href={
                            'mailto:' +
                            (import.meta.env.VITE_EMAIL ?? undefined)
                        }>
                        {import.meta.env.VITE_EMAIL ?? 'undefined'}
                    </a>
                </div>
            </div>
            <div className='row fs-xs mb-6'>
                <div className='col-1 d-flex justify-content-end'>
                    <a
                        href='https://www.linkedin.com/in/mateusz-eiding/'
                        target='_blank'
                        className='d-flex'>
                        <span className='me-3'>LinkedIn profile</span>
                        <img
                            height={imgHeight}
                            alt='LinkedIn'
                            src={linkedin}
                        />
                    </a>
                </div>
                <div className='col-1 d-flex'>
                    <a
                        href='https://github.com/mateuszeiding/curriculum-vitae/'
                        target='_blank'
                        className='d-flex'>
                        <img
                            height={imgHeight}
                            alt='GitHub'
                            src={github}
                        />
                        <span className='ms-3'>Resume on GitHub</span>
                    </a>
                </div>
            </div>
        </>
    );
}
