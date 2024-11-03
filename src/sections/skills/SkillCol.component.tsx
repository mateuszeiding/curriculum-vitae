import { useEffect } from 'react';

import SectionHeader from '@/sections/_shared/SectionHeader/SectionHeader.component';
import { SectionHeaderTypeEnum } from '@/sections/_shared/SectionHeader/sectionHeaderType.enum';

export type SkillColProps = {
    title: string;
    main?: string[];
    secondary?: string[];
};

export default function SkillCol({ title, main, secondary }: SkillColProps) {
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
