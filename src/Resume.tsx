import { useRef } from 'react';
import PersonalInfo from './sections/PersonalInfo.section';
import Skills from './sections/Skills.section';
import { useReactToPrint } from 'react-to-print';
import Experience from './sections/Experience.section';
import Certificates from './sections/Certificates.section';
import Education from './sections/Education.section';
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
                <PersonalInfo />
                <Skills />
                <Experience />
                <Certificates />
                <Education />
            </main>
        </>
    );
}
