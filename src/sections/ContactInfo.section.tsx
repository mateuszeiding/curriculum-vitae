import SectionHeader from '@/components/SectionHeader.component';

export default function ContactInfo() {
    const phone = import.meta.env.VITE_PHONE;
    const email = import.meta.env.VITE_EMAIL;
    return (
        <section>
            <SectionHeader labels={['Contact Info']} />
            <div className='row'>
                <div className='col-1'>
                    <div className='uppercase fw-medium fs-sm'>
                        Mateusz Eiding
                    </div>
                    <div className='fs-xs d-flex column-gap-3'>
                        <a
                            href={
                                phone &&
                                'tel:' +
                                    phone
                                        .replaceAll(' ', '')
                                        .replaceAll('-', '')
                            }>
                            {import.meta.env.VITE_PHONE ?? 'phone'}
                        </a>
                        <div className='v-divider'></div>
                        <a href={email && 'mailto:' + email}>
                            {email ?? 'email'}
                        </a>
                    </div>
                    <div className='fs-xs'>Poland, Szczecin</div>
                </div>
            </div>
        </section>
    );
}
