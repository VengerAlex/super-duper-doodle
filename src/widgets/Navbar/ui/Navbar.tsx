import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setAuthModal(true);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button onClick={onShowModal}>{t('Log In')}</Button>

            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    );
};
