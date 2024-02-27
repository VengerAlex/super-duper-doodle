import {classNames} from "shared/lib/classNames";
import cls from './LangSwitcher.module.scss'
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {i18n, t} = useTranslation();

    const onToggleTheme = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en')
    }

    return <Button
        className={classNames(cls.LangSwitcher, {}, [className])}
        onClick={onToggleTheme}
    >
        {t('Change Language')}
    </Button>
}