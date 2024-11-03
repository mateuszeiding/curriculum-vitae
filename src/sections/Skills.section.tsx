import SectionHeader from '@/components/SectionHeader/SectionHeader.component';
import { SectionHeaderTypeEnum } from '@/components/SectionHeader/sectionHeaderType.enum';
import { useEffect } from 'react';

export default function Skills() {
    return (
        <section className='row row-gap-5 p-relative'>
            <SkillCol {...frameworks} />
            <SkillCol {...languages} />
            <SkillCol {...tools} />
        </section>
    );
}

type SkillColProps = {
    title: string;
    main?: string[];
    secondary?: string[];
};

function SkillCol({ title, main, secondary }: SkillColProps) {
    useEffect(() => {
        (() => {
            const mainNode = document.getElementById(
                ['skill', title, 'main'].join('_')
            );
            const secondaryNode = document.getElementById(
                ['skill', title, 'secondary'].join('_')
            );

            [mainNode, secondaryNode].forEach((node) => {
                if (!node) return;

                const children = Array.from(node.children) as HTMLElement[];

                children.forEach((skill, i, arr) => {
                    if (
                        skill.getBoundingClientRect().y ===
                        arr[i + 1]?.getBoundingClientRect().y
                    ) {
                        skill.classList.add('sep-1');
                    }
                });
            });
        })();
    }, [title]);

    return (
        <div className='col-1 d-flex flex-column align-items-center'>
            <SectionHeader
                label={title}
                type={SectionHeaderTypeEnum.center}
            />
            <div
                id={['skill', title, 'main'].join('_')}
                className='fs-sm d-flex flex-wrap gap-2 justify-content-center'>
                {main?.map((val) => <span className='sep'>{val}</span>)}
            </div>
            <div className='w-100 d-flex justify-content-around fs-sm px-8 tx-dark-cerulean'>
                {Array.from(Array(3)).map(() => (
                    <span>&bull;</span>
                ))}
            </div>
            <div
                id={['skill', title, 'secondary'].join('_')}
                className='fs-xs d-flex flex-wrap gap-2 justify-content-center'>
                {secondary?.map((val) => <span className='sep'>{val}</span>)}
            </div>
        </div>
    );
}

const frameworks: SkillColProps = {
    title: 'Frameworks',
    main: ['React', 'React Router v6', 'Bootstrap', 'Sass'],
    secondary: ['Vue3', 'Angular2', '.NET', 'REST', 'Stencil.js'],
};

const languages: SkillColProps = {
    title: 'Dev languages',
    main: ['Javascript', 'Typescript', 'HTML', 'CSS'],
    secondary: ['C#', 'T-SQL', 'Markdown'],
};

const tools: SkillColProps = {
    title: 'Tools',
    main: ['Vite', 'Figma', 'Vitest', 'Zod', 'Docker', 'ESLint', 'Git'],
    secondary: ['Azure DevOps', 'Webpack', 'Storybook', 'NPM Registry'],
};
