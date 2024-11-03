import { cls } from '@/util/className';
import { StringUtil } from '@/util/type/StringUtil';

type SectionHeaderProps = {
    labels: string[];
    reverse?: boolean;
};

export default function SectionHeader({
    labels,
    reverse,
}: Readonly<SectionHeaderProps>) {
    const isMultiple = labels.length > 1;
    return (
        <div
            className={cls(
                'row fw-medium tx-dark-cerulean p-relative',
                reverse && 'justify-content-end'
            )}>
            <hr />
            {labels.map((label) => (
                <div
                    key={label}
                    className={cls(
                        'z-2 d-flex flex-column',
                        reverse ? 'pe-0' : !isMultiple && 'ps-0',
                        isMultiple ? 'col-1' : 'col',
                        isMultiple && 'align-items-center',
                        reverse && 'align-self-end'
                    )}>
                    <div
                        className={cls(
                            'mb-3 bg-ghost-white',
                            isMultiple && 'px-4',
                            reverse && 'ps-4',
                            !reverse && !isMultiple && 'pe-4'
                        )}>
                        {StringUtil.capitalizeFirstLetter(label)}
                    </div>
                </div>
            ))}
        </div>
    );
}
