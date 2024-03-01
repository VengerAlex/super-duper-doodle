import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { onThemeChange } = useTheme();
    const { t } = useTranslation();

    return (
        <Button
            data-testid="changeTheme"
            className={classNames('', {}, [className])}
            onClick={onThemeChange}
        >
            {t('Change Theme')}
        </Button>
    );
};
