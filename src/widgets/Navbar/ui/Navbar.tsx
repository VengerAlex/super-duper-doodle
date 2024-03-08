import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setAuthModal((prevState) => !prevState);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button onClick={onToggleModal}>{t('Log In')}</Button>

            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, aut, ea! Corporis culpa cupiditate dolores facere illo, ipsam nemo rerum velit. Ab adipisci, consequatur cum ea eaque laudantium maxime modi nihil nisi nostrum numquam praesentium quaerat repellat tempore tenetur ullam!
            </Modal>
        </div>
    );
};
