import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent } from 'react';
import cls from './Select.module.scss';

interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readOnly?: boolean;
}

export const Select = ({
    className,
    label,
    onChange,
    value,
    readOnly,
    options,
}: SelectProps) => {
    const mods: Mods = {};

    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(event.target.value);
    };

    const optionsList = options?.map((opt) => (
        <option className={cls.option} value={opt.value} key={opt.value}>
            {opt.content}
        </option>
    ));

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{label}</span>}
            <select disabled={readOnly} className={cls.select} value={value} onChange={onChangeHandler}>
                {optionsList}
            </select>
        </div>
    );
};
