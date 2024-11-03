import { cls } from '@/util/className';
import { StringUtil } from '@/util/type/StringUtil';

type SectionHeaderProps = {
    labels: string[];
};

export default function SectionHeader({
    labels,
}: Readonly<SectionHeaderProps>) {
    const isMultiple = labels.length > 1;
    return (
        <div className='row fw-medium tx-dark-cerulean p-relative mt-6'>
            <hr />
            {labels.map((label) => (
                <div
                    key={label}
                    className={cls(
                        'z-2 d-flex flex-column',
                        isMultiple ? 'col-1' : 'col',
                        isMultiple && 'align-items-center',
                        !isMultiple && 'bg-ghost-white'
                    )}>
                    <div
                        className={cls(
                            'mb-3',
                            isMultiple ? 'px-4' : 'pe-4',
                            isMultiple && 'bg-ghost-white'
                        )}>
                        {StringUtil.capitalizeFirstLetter(label)}
                    </div>
                </div>
            ))}
        </div>
    );
}
