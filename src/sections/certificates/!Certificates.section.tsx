import { useDeferredValue } from "react";

import ResumeAPI from "@api/Resume.api";
import type { CertificateDto } from "@models/Certificate.dto";
import Await from "@sections/_shared/Await.component";
import SectionHeader from "@sections/_shared/SectionHeader/SectionHeader.component";
import Certificate from "./Certificate.component";

export default function Certificates() {
	const certificates = useDeferredValue(ResumeAPI.getCertificates());

	return (
		<section className="p-relative">
			<SectionHeader label="certificates" />
			<Await
				fallback={<Certificate.Skeletion />}
				promise={certificates}
				resolver={(certificates: CertificateDto[]) =>
					certificates.map((certificate) => (
						<Certificate.Component key={certificate.name} {...certificate} />
					))
				}
			/>
		</section>
	);
}
