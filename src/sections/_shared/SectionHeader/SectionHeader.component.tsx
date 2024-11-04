import { SectionHeaderTypeEnum } from './sectionHeaderType.enum';

import { cls } from '@/util/className';
import { StringUtil } from '@/util/type/StringUtil';

type SectionHeaderProps = {
    label: string;
    type?: SectionHeaderTypeEnum;
};

export default function SectionHeader({
    label,
    type = SectionHeaderTypeEnum.normal,
}: Readonly<SectionHeaderProps>) {
    return (
        <div
            className={cls(
                'row fw-medium tx-dark-cerulean',
                type === SectionHeaderTypeEnum.reverse && 'justify-content-end'
            )}>
            <div className='col d-flex flex-column'>
                <hr
                    className={cls(
                        type === SectionHeaderTypeEnum.reverse && 'right-0',
                        type === SectionHeaderTypeEnum.center &&
                            'left-0 right-0 multi'
                    )}
                />
                <div
                    className={cls(
                        'z-2 mb-3 bg-ghost-white flex-shrink-0',
                        type === SectionHeaderTypeEnum.center &&
                            'px-4 align-self-center',
                        type === SectionHeaderTypeEnum.reverse &&
                            'ps-4 align-self-end',
                        type === SectionHeaderTypeEnum.normal &&
                            'pe-4 align-self-start'
                    )}>
                    {StringUtil.capitalizeFirstLetter(label)}
                </div>
            </div>
        </div>
    );
}
