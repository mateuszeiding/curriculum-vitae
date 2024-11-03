import SectionHeader from '@/components/SectionHeader/SectionHeader.component';

import { experienceData } from './experience.mock';
import ExperiencePerPosition from './ExperiencePerPosition.component';

export default function Experience() {
    return (
        <section className='p-relative'>
            <SectionHeader label='Experience' />
            {experienceData.map((experience, i, arr) => (
                <ExperiencePerPosition
                    key={i}
                    {...experience}
                    {...(arr[i - 1]?.company === experience.company && {
                        ...{ company: '' },
                    })}
                />
            ))}
        </section>
    );
}
