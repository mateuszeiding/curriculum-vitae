import type { EducationDto } from "@models/Education.dto";
import { cls } from "@util/className";
import DateUtil from "@util/type/DateUtil";
import StringUtil from "@util/type/StringUtil";

type EducationComponentProps = EducationDto;

export default {
	Skeleton: () => (
		<div className="row row-gap-2">
			<div className="col-sm-2 col-lg-2">
				<div className="skeleton w-sm-100 w-lg-75" />
			</div>
			<div
				className={cls(
					"col-sm-4 col-lg-2",
					"d-flex justify-content-lg-center justify-content-sm-end",
					"underline",
				)}
			>
				<div className="skeleton w-sm-75 w-lg-75" />
			</div>
			<div
				className={cls(
					"col-sm-3 col-lg-2",
					"d-flex justify-content-lg-end justify-content-sm-start",
				)}
			>
				<div className="skeleton w-sm-50 w-lg-50" />
			</div>
		</div>
	),
	Component: ({
		title,
		school,
		startDate,
		endDate,
	}: Readonly<EducationComponentProps>) => (
		<div className="row fs-sm fw-medium">
			<div className="col-lg-2 col-print-2 col-sm-3">{title}</div>
			<div
				className={cls(
					"col-lg-2 col-print-2 col-sm-3",
					"text-lg-center text-print-center text-sm-end",
				)}
			>
				{school}
			</div>
			<div
				className={cls(
					"col-sm-6 col-lg-2 col-print-2",
					"fw-regular text-lg-end text-print-end text-sm-start",
				)}
			>
				{StringUtil.range(
					DateUtil.to2digMMNumericYYYY(startDate),
					DateUtil.to2digMMNumericYYYY(endDate),
				)}
			</div>
		</div>
	),
};
