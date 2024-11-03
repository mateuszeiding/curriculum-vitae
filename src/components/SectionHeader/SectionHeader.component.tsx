import { cls } from '@/util/className';
import { StringUtil } from '@/util/type/StringUtil';
import { SectionHeaderTypeEnum } from './sectionHeaderType.enum';

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
            <div
                className={cls(
                    'd-flex flex-column',
                    type === SectionHeaderTypeEnum.center ? 'col-1' : 'col',
                    type === SectionHeaderTypeEnum.center &&
                        'align-items-center',
                    type === SectionHeaderTypeEnum.reverse && 'align-self-end'
                )}>
                <hr
                    className={cls(
                        type === SectionHeaderTypeEnum.reverse && 'right-0',
                        type === SectionHeaderTypeEnum.center &&
                            'left-0 right-0 multi'
                    )}
                />
                <div
                    className={cls(
                        'z-2 mb-3 bg-ghost-white',
                        type === SectionHeaderTypeEnum.center && 'px-4',
                        type === SectionHeaderTypeEnum.reverse && 'ps-4',
                        type === SectionHeaderTypeEnum.normal && 'pe-4'
                    )}>
                    {StringUtil.capitalizeFirstLetter(label)}
                </div>
            </div>
        </div>
    );
}
