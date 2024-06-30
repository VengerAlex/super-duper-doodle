import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal';
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import cls from './Login.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        className={classNames(cls.LoginModal, {}, [className])}
        lazy
    >
        <LoginForm />
    </Modal>
);
