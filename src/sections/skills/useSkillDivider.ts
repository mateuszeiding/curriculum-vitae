import { useEffect, useMemo } from 'react';

export const useSkillDivider = (title: string) => {
    const ids = useMemo(
        () => ({
            mainId: ['skill', title, 'main'].join('_'),
            secondaryId: ['skill', title, 'secondary'].join('_'),
        }),
        [title]
    );

    useEffect(() => {
        (() => {
            const mainNode = document.getElementById(ids.mainId);
            const secondaryNode = document.getElementById(ids.secondaryId);

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
    }, [title, ids]);

    return ids;
};
