import linkedin from '@assets/linkedin.png';
import github from '@assets/github-dark.png';

export default function Links() {
    const imgHeight =
        parseFloat(getComputedStyle(document.documentElement).fontSize) * 1.6;

    return (
        <section>
            <div className='row fs-xs'>
                <div className='col-3 d-flex'>
                    <a
                        href='https://www.linkedin.com/in/mateusz-eiding/'
                        target='_blank'
                        className='d-flex'>
                        <img
                            height={imgHeight}
                            alt='LinkedIn'
                            src={linkedin}
                        />
                        <span className='ms-3'>LinkedIn profile</span>
                    </a>
                </div>
                <div className='col-3 d-flex justify-content-end'>
                    <a
                        href='https://github.com/mateuszeiding/curriculum-vitae/'
                        target='_blank'
                        className='d-flex'>
                        <span className='me-3 text-end'>Resume as a code</span>
                        <img
                            height={imgHeight}
                            alt='GitHub'
                            src={github}
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
