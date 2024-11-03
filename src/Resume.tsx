import { useRef } from 'react';
import ContactInfo from './sections/ContactInfo.section';
import Skills from './sections/Skills.section';
import { useReactToPrint } from 'react-to-print';
import Experience from './sections/Experience.section';
import Certificates from './sections/Certificates.section';
import Education from './sections/Education.section';
import Languages from './sections/Languages.section';
import Links from './sections/Links.section';

export default function Resume() {
    const contentRef = useRef<HTMLDivElement>(null);
    const reactToPrintFn = useReactToPrint({ contentRef });

    return (
        <>
            {import.meta.env.DEV && (
                <button onClick={() => reactToPrintFn()}>Print</button>
            )}
            <main
                ref={contentRef}
                className='container bg-ghost-white d-flex flex-column row-gap-5'>
                <Links />
                <div className='row'>
                    <div className='col-2 p-relative'>
                        <ContactInfo />
                    </div>
                    <div className='col-1 p-relative'>
                        <Languages />
                    </div>
                </div>
                <Skills />
                <Experience />
                <Certificates />
                <Education />
            </main>
        </>
    );
}
