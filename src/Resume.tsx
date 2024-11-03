import { useRef } from 'react';
import ContactInfo from './sections/ContactInfo.section';
import Skills from './sections/Skills.section';
import { useReactToPrint } from 'react-to-print';
import Experience from './sections/Experience.section';
import Certificates from './sections/Certificates.section';

export default function Resume() {
    const contentRef = useRef<HTMLDivElement>(null);
    const reactToPrintFn = useReactToPrint({ contentRef });

    return (
        <>
            <button onClick={() => reactToPrintFn()}>Print</button>
            <main
                ref={contentRef}
                className='container bg-ghost-white'>
                <ContactInfo />
                <Skills />
                <Experience />
                <Certificates />
            </main>
        </>
    );
}
