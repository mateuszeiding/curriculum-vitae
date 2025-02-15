import github from "@assets/github-dark.png";
import linkedin from "@assets/linkedin.png";
import vercel from "@assets/vercel-dark.png";

export default function Links() {
	const imgHeight =
		Number.parseFloat(getComputedStyle(document.documentElement).fontSize) *
		1.6;

	return (
		<section>
			<div className="row fs-xs">
				<div className="col-3 d-flex">
					<a
						href="https://www.linkedin.com/in/mateusz-eiding/"
						target="_blank"
						className="d-flex"
						rel="noreferrer"
					>
						<img height={imgHeight} alt="LinkedIn" src={linkedin} />
						<span className="ms-3">LinkedIn profile</span>
					</a>
				</div>
				<div className="col-3 d-flex justify-content-end">
					<a
						href={
							import.meta.env.PROD
								? "https://github.com/mateuszeiding/curriculum-vitae/"
								: "https://mateusz-eiding-cv.vercel.app/"
						}
						target="_blank"
						className="d-flex"
						rel="noreferrer"
					>
						<span className="me-3 text-end">{`Resume as a ${import.meta.env.PROD ? "code" : "web app"}`}</span>
						<img
							height={imgHeight}
							alt={import.meta.env.PROD ? "GitHub" : "Vercel"}
							src={import.meta.env.PROD ? github : vercel}
						/>
					</a>
				</div>
			</div>
		</section>
	);
}
