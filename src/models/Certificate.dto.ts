interface ICertificateDto {
	name: string;
	startDate: Date;
	link?: string;
	endDate?: Date;
}

export class CertificateDto implements ICertificateDto {
	name = "";
	startDate: Date = new Date();
	link?: string;
	endDate?: Date;

	constructor(object: Partial<ICertificateDto>) {
		Object.assign(this, object);
	}
}
