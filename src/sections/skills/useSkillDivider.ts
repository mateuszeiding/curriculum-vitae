import { useEffect, useMemo, useState } from "react";

enum ViewportSizeEnum {
	desktop = "desktop",
	mobile = "mobile",
}

function getViewportSize() {
	return window.innerWidth > 850
		? ViewportSizeEnum.desktop
		: ViewportSizeEnum.mobile;
}

const createDividers = (mainId: string, secondaryId: string) => {
	const mainNode = document.getElementById(mainId);
	const secondaryNode = document.getElementById(secondaryId);

	for (const node of [mainNode, secondaryNode]) {
		if (!node) return;

		const children = Array.from(node.children) as HTMLElement[];
		for (const [index, child] of children.entries()) {
			child.classList.remove("sep-1");

			if (
				child.getBoundingClientRect().y ===
				children[index + 1]?.getBoundingClientRect().y
			) {
				child.classList.add("sep-1");
			}
		}
	}
};

export const useSkillDivider = (title: string) => {
	const [viewportSize, setViewportSize] = useState(() => getViewportSize());

	const ids = useMemo(
		() => ({
			mainId: ["skill", title, "main"].join("_"),
			secondaryId: ["skill", title, "secondary"].join("_"),
		}),
		[title],
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
