import github from "@assets/github-dark.png";
import linkedin from "@assets/linkedin.png";
import vercel from "@assets/vercel-dark.png";
import { cls } from "@util/className";

interface ILink {
	href: string;
	alignment: "start" | "center" | "end";
	imgSrc: string;
	imgAlt: string;
	text: string;
}

const links: ILink[] = [
	{
		text: "LinkedIn",
		imgAlt: "LinkedIn profile",
		imgSrc: linkedin,
		alignment: "start",
		href: "https://www.linkedin.com/in/mateusz-eiding/",
	},
	{
		text: "GitHub",
		imgAlt: "GitHub profile",
		imgSrc: github,
		alignment: "center",
		href: "https://github.com/mateuszeiding/",
	},
	{
		text: "Resume as App",
		imgAlt: "Resume as a web application",
		imgSrc: vercel,
		alignment: "end",
		href: "https://mateusz-eiding-cv.vercel.app/",
	},
];

export default function Links() {
	const imgHeight =
		Number.parseFloat(getComputedStyle(document.documentElement).fontSize) *
		1.6;

	return (
		<section>
			<div className="row fs-xs">
				{links.map((l) => (
					<div
						key={l.text}
						className={cls("col-2 d-flex", `justify-content-${l.alignment}`)}
					>
						<a
							href={l.href}
							target="_blank"
							className="d-flex align-items-center"
							rel="noreferrer"
						>
							<img height={imgHeight} alt={l.imgAlt} src={l.imgSrc} />
							<span className="ms-3">{l.text}</span>
						</a>
					</div>
				))}
			</div>
		</section>
	);
}
