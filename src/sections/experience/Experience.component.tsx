import type { ExperienceDto } from "@models/Experience.dto";
import { cls } from "@util/className";
import DateUtil from "@util/type/DateUtil";
import StringUtil from "@util/type/StringUtil";

export type ExperiencePerPositionProps = ExperienceDto;

export default {
	Skeleton: () => (
		<div>
			<div className="row row-gap-2 mb-4">
				<div className="col">
					<div className="skeleton w-sm-100 w-lg-75" />
				</div>
				<div
					className={cls(
						"col-lg-2 col-sm-4 d-flex",
						"justify-content-lg-center justify-content-sm-end",
					)}
				>
					<div className="skeleton w-sm-50 w-lg-75" />
				</div>
				<div
					className={cls(
						"col-lg-2 col-sm-6",
						"d-flex justify-content-lg-end justify-content-sm-start",
					)}
				>
					<div className="skeleton w-sm-25 w-lg-50" />
				</div>
			</div>
			<ul className="row">
				<li className="col-6">
					<div className="skeleton w-100 mt-1 mb-2" />
					<div className="skeleton w-75" />
				</li>
			</ul>
		</div>
	),
	Component: ({
		position,
		company,
		startDate,
		endDate,
		bulletPoints,
	}: Readonly<ExperiencePerPositionProps>) => (
		<div className="mb-4">
			<div className="row fs-sm fw-medium">
				<div className="col-lg-2 col-print-2 col-sm-3">{position}</div>
				<div
					className={cls(
						"col-lg-2 col-print-2 col-sm-3",
						"text-lg-center text-print-center text-sm-end",
					)}
				>
					{company}
				</div>
				<div
					className={cls(
						"col-lg-2 col-print-2 col-sm-6",
						"fw-regular text-lg-end text-print-end text-sm-start",
					)}
				>
					{startDate &&
						StringUtil.range(
							DateUtil.to2digMMNumericYYYY(startDate),
							!endDate ? "Current" : DateUtil.to2digMMNumericYYYY(endDate),
						)}
				</div>
			</div>
			<div className="row">
				<div className="col-6">
					<ul>
						{bulletPoints.map((bulletPoint) => (
							<li key={window.crypto.randomUUID()}>{bulletPoint}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	),
};
