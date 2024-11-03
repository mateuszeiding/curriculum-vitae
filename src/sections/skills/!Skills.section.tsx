import SkillCol from './SkillCol.component';
import { skills } from './skills.mock';

export default function Skills() {
    return (
        <section className='row row-gap-5 p-relative'>
            {skills.map((skill, i) => (
                <SkillCol
                    key={i}
                    {...skill}
                />
            ))}
        </section>
    );
}
