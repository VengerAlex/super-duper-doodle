import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/input';
import { useState } from 'react';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    const [v, setV] = useState('');

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autoFocus
                placeholder={t('Enter username')}
                className={cls.input}
                value={v}
                onChange={(value) => setV(value)}
            />
            <Input
                placeholder={t('Enter password')}
                className={cls.input}
            />
            <Button className={cls.loginBtn}>{t('Login')}</Button>
        </div>
    );
};
