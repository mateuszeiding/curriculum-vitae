import SectionHeader from '@/components/SectionHeader.component';

export default function ContactInfo() {
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
                                'tel:' +
                                ((
                                    import.meta.env.VITE_PHONE as
                                        | string
                                        | undefined
                                )
                                    ?.replaceAll(' ', '')
                                    .replaceAll('-', '') ?? undefined)
                            }>
                            {import.meta.env.VITE_PHONE ?? 'undefined'}
                        </a>
                        <div className='v-divider'></div>
                        <a
                            href={
                                'mailto:' +
                                (import.meta.env.VITE_EMAIL ?? undefined)
                            }>
                            {import.meta.env.VITE_EMAIL ?? 'undefined'}
                        </a>
                    </div>
                    <div className='fs-xs'>Poland, Szczecin</div>
                </div>
            </div>
        </section>
    );
}
