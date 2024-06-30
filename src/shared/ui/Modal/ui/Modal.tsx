import { classNames } from 'shared/lib/classNames/classNames';
import {
    MouseEvent, ReactNode, useEffect, useState,
} from 'react';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
    const {
        children,
        onClose,
        isOpen,
        className,
        lazy,
    } = props;

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const onCloseModal = () => {
        onClose?.();
    };

    const onContentClick = (event: MouseEvent) => {
        event.stopPropagation();
    };

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <div className={classNames(cls.Modal, mods, [className])} data-testid="modal" style={{ opacity: 1 }}>
            <div className={cls.overlay} onClick={onCloseModal} data-testid="modal-overlay">
                <div
                    className={cls.content}
                    onClick={onContentClick}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};
