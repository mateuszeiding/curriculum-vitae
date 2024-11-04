import ResumeAPI from '@/api/Resume.api';
import Await from '../_shared/Await.component';
import Default from './Skill.component';
import { SkillEnum } from './Skill.enum';

export default function Skills() {
    return (
        <section className='row row-gap-5 p-relative'>
            {Object.keys(SkillEnum).map((skillKey) => (
                <Await
                    key={skillKey}
                    promise={ResumeAPI.getSkills(
                        SkillEnum[skillKey as keyof typeof SkillEnum]
                    )}
                    fallback={Default.Skeleton(
                        SkillEnum[skillKey as keyof typeof SkillEnum]
                    )}
                    resolver={(skill) => (
                        <Default.Component
                            title={skillKey}
                            {...skill}
                        />
                    )}
                />
            ))}
        </section>
    );
}
