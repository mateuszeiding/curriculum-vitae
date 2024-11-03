import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import PersonalInfo from './sections/personalInfo/!PersonalInfo.section';
import Skills from './sections/skills/!Skills.section';
import Experience from './sections/experience/!Experience.section';
import Certificates from './sections/certificates/!Certificates.section';
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
