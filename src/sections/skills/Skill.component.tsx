import SectionHeader from '@/sections/_shared/SectionHeader/SectionHeader.component';
import { SectionHeaderTypeEnum } from '@/sections/_shared/SectionHeader/sectionHeaderType.enum';
import { SkillDto } from '@/models/Skill.dto';

import { cls } from '@/util/className';
import { SkillEnum } from './Skill.enum';
import { useSkillDivider } from './useSkillDivider';

export type SkillColProps = SkillDto & {
    title: string;
};

export default {
    Skeleton: (skill: SkillEnum) => {
        const { mainId, secondaryId } = useSkillDivider(skill);

        return (
            <div className='col-lg-2 col-sm-6 d-flex flex-column align-items-center'>
                <SectionHeader
                    label={skill}
                    type={SectionHeaderTypeEnum.center}
                />
                <div
                    id={mainId}
                    className='fs-sm d-flex align-self-normal flex-row justify-content-center'>
                    {Array.from(Array(3)).map((_, i) => (
                        <div
                            key={i}
                            className={cls(
                                'w-sm-25 w-lg-50 lh-1 d-flex justify-content-center ps-2 sep'
                            )}>
                            <div className='skeleton w-75'></div>
                        </div>
                    ))}
                </div>
                <div className='w-100 d-flex justify-content-around fs-sm px-8 tx-dark-cerulean'>
                    {Array.from(Array(3)).map((_, i) => (
                        <span key={i}>&bull;</span>
                    ))}
                </div>
                <div
                    id={secondaryId}
                    className='fs-xs d-flex align-self-normal flex-wrap gap-2 justify-content-center'>
                    {Array.from(Array(5)).map((_, i) => (
                        <div
                            key={i}
                            className={cls(
                                'w-sm-10 w-lg-25 d-flex lh-1 justify-content-center ps-2 sep'
                            )}>
                            <div className='skeleton w-75'></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    },
    Component: function ({ title, main, secondary }: SkillColProps) {
        const { mainId, secondaryId } = useSkillDivider(title);

        return (
            <div className='col-lg-2 col-sm-6 d-flex flex-column align-items-center'>
                <SectionHeader
                    label={title}
                    type={SectionHeaderTypeEnum.center}
                />
                <div
                    id={mainId}
                    className='fs-sm d-flex flex-wrap gap-2 justify-content-center'>
                    {main?.sort().map((val) => (
                        <span
                            key={val}
                            className='sep px-2'>
                            {val}
                        </span>
                    ))}
                </div>
                <div className='w-100 d-flex justify-content-around fs-sm px-8 tx-dark-cerulean'>
                    {Array.from(Array(3)).map((_, i) => (
                        <span key={i}>&bull;</span>
                    ))}
                </div>
                <div
                    id={secondaryId}
                    className='fs-xs d-flex flex-wrap gap-2 justify-content-center'>
                    {secondary?.sort().map((val) => (
                        <span
                            key={val}
                            className='sep px-2'>
                            {val}
                        </span>
                    ))}
                </div>
            </div>
        );
    },
};
