import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select';
import { useTranslation } from 'react-i18next';
import { Currency } from 'entities/Currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readOnly?: boolean
}

export const CurrencySelect = ({
    className,
    onChange,
    value,
    readOnly,
}: CurrencySelectProps) => {
    const { t } = useTranslation();

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Select currency')}
            options={[
                { value: Currency.EUR, content: Currency.EUR },
                { value: Currency.USD, content: Currency.USD },
            ]}
            value={value}
            onChange={(value) => onChange?.(value as Currency)}
            readOnly={readOnly}
        />
    );
};
