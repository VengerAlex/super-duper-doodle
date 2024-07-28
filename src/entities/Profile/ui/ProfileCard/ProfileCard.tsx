import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/input';
import { Profile } from 'entities/Profile';
import { Loader } from 'shared/ui/Loader';
import { Avatar } from 'shared/ui/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile
    error?: string;
    isLoading?: boolean;
    onChangeLastname: (value?: string) => void;
    onChangeFirstname: (value?: string) => void;
    onChangeCity: (value?: string) => void;
    onChangeAge: (value?: string) => void;
    onChangeUsername: (value?: string) => void;
    onChangeAvatar: (value?: string) => void;
    onChangeCurrency: (currency: Currency) => void;
    readOnly?: boolean
}

export const ProfileCard = ({
    className,
    data,
    isLoading,
    error,
    onChangeLastname,
    onChangeFirstname,
    onChangeCity,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    readOnly,
}: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, { }, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Error happened while loading profile')}
                    text={t('Try to reload the page')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.data}>
                {data?.avatar && <Avatar src={data?.avatar} className={cls.avatar} alt="User Avatar" />}
                <Input
                    value={data?.first}
                    onChange={onChangeFirstname}
                    placeholder={t('Your Name')}
                    className={cls.input}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.lastname}
                    onChange={onChangeLastname}
                    placeholder={t('Your LastNae')}
                    className={cls.input}
                    readOnly={readOnly}
                />
                <Input
                    type="number"
                    value={data?.age}
                    onChange={onChangeAge}
                    placeholder={t('Your Age')}
                    className={cls.input}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.city}
                    onChange={onChangeCity}
                    placeholder={t('Your City')}
                    className={cls.input}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.username}
                    onChange={onChangeUsername}
                    placeholder={t('Your Username')}
                    className={cls.input}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.avatar}
                    onChange={onChangeAvatar}
                    placeholder={t('Your Avatar')}
                    className={cls.input}
                    readOnly={readOnly}
                />
                <CurrencySelect value={data?.currency} onChange={onChangeCurrency} readOnly={readOnly} />
            </div>
        </div>
    );
};
