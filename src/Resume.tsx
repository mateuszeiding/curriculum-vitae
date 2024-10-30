export default function Resume() {
    return (
        <>
            <div className='row'>
                <div className='col-1 d-flex justify-content-end align-items-center fs-xs'>
                    <a
                        href={
                            'tel:' +
                            ((import.meta.env.VITE_PHONE as string | undefined)
                                ?.replaceAll(' ', '')
                                .replaceAll('-', '') ?? undefined)
                        }>
                        {import.meta.env.VITE_PHONE ?? 'undefined'}
                    </a>
                </div>
                <div className='v-divider'></div>
                <div className='col d-flex justify-content-center uppercase fw-medium fs-sm'>
                    Mateusz Eiding
                </div>
                <div className='v-divider'></div>
                <div className='col-1 d-flex align-items-center fs-xs'>
                    <a
                        href={
                            'mailto:' +
                            (import.meta.env.VITE_EMAIL ?? undefined)
                        }>
                        {import.meta.env.VITE_EMAIL ?? 'undefined'}
                    </a>
                </div>
            </div>
        </>
    );
}
