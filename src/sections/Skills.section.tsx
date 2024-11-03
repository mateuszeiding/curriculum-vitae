import SectionHeader from '@/components/SectionHeader.component';
import { useEffect } from 'react';

export default function Skills() {
    return (
        <>
            <SectionHeader
                labels={[technologies.title, languages.title, tools.title]}
            />
            <div className='row p-relative'>
                <SkillCol {...technologies} />
                <SkillCol {...languages} />
                <SkillCol {...tools} />
            </div>
        </>
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
        <div className='col-1 z-2 d-flex flex-column align-items-center'>
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

const technologies: SkillColProps = {
    title: 'Frameworks/Libraries',
    main: ['React', 'React Router v6', 'Bootstrap'],
    secondary: ['Vue3', 'Angular2', '.NET', 'Stencil.js'],
};

const languages: SkillColProps = {
    title: 'Languages',
    main: ['Javascript', 'Typescript', 'HTML', 'CSS/SCSS'],
    secondary: ['C#', 'T-SQL'],
};

const tools: SkillColProps = {
    title: 'Tools/Platforms',
    main: ['Vite', 'Figma', 'Vitest', 'Docker', 'Git', 'NPM'],
    secondary: ['Azure DevOps', 'Webpack', 'Storybook'],
};
