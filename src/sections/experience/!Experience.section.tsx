import SectionHeader from '@sections/_shared/SectionHeader/SectionHeader.component';
import Await from '@sections/_shared/Await.component';

import Default from './Experience.component';
import ResumeAPI from '@api/Resume.api';

export default function Experience() {
    return (
        <section className='p-relative'>
            <SectionHeader label='Experience' />
            <Await
                promise={ResumeAPI.getExperience()}
                fallback={<Default.Skeleton />}
                resolver={(experience) =>
                    experience.map((experience, i, arr) => (
                        <Default.Component
                            key={i}
                            {...experience}
                            {...(arr[i - 1]?.company === experience.company && {
                                ...{ company: '' },
                            })}
                        />
                    ))
                }
            />
        </section>
    );
}
