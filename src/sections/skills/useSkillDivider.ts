import { useEffect, useMemo, useState } from 'react';

enum ViewportSizeEnum {
    desktop = 'desktop',
    mobile = 'mobile',
}

function getViewportSize() {
    return window.innerWidth > 800
        ? ViewportSizeEnum.desktop
        : ViewportSizeEnum.mobile;
}

const createDividers = (mainId: string, secondaryId: string) => {
    const mainNode = document.getElementById(mainId);
    const secondaryNode = document.getElementById(secondaryId);

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
};

export const useSkillDivider = (title: string) => {
    const [viewportSize, setViewportSize] = useState(() => getViewportSize());

    const ids = useMemo(
        () => ({
            mainId: ['skill', title, 'main'].join('_'),
            secondaryId: ['skill', title, 'secondary'].join('_'),
        }),
        [title]
    );

    useEffect(() => {
        const observer = new ResizeObserver(() => {
            if (viewportSize === getViewportSize()) return;

            createDividers(ids.mainId, ids.secondaryId);
            setViewportSize(getViewportSize());
        });

        observer.observe(document.body);
        createDividers(ids.mainId, ids.secondaryId);

        return () => observer.disconnect();
    }, [ids, viewportSize]);

    return ids;
};
