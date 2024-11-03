import { useEffect } from 'react';

export default function Skills() {
    return (
        <>
            <div className='row p-relative'>
                <hr />
                <SkillCol {...languages} />
                <SkillCol {...technologies} />
                <SkillCol {...tools} />
            </div>
        </>
    );
}

type SkillColProps = {
    title: string;
    content?: string[];
};

function SkillCol({ title, content }: SkillColProps) {
    useEffect(() => {
        (() => {
            const node = document.getElementById(['skill', title].join('_'));
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
        })();
    }, [title]);

    return (
        <div className='col-1 d-flex flex-column align-items-center gap-3'>
            <div className='fw-medium tx-dark-cerulean z-2 bg-ghost-white px-4'>
                {title}
            </div>
            <div
                id={['skill', title].join('_')}
                className='fs-xs d-flex flex-wrap gap-2 justify-content-center'>
                {content?.map((val) => <span className='sep'>{val}</span>)}
            </div>
        </div>
    );
}

const languages: SkillColProps = {
    title: 'Languages',
    content: ['Javascript', 'Typescript', 'Python', 'Java', 'C++'],
};

const technologies: SkillColProps = {
    title: 'Technologies',
    content: [
        'React',
        'Node.js',
        'Express',
        'MongoDB',
        'PostgreSQL',
        'Docker',
        'AWS',
        'Heroku',
    ],
};

const tools: SkillColProps = {
    title: 'Tools',
    content: ['Git', 'VS Code', 'Postman', 'Jira', 'Confluence', 'Slack'],
};
