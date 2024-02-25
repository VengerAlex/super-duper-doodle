import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import ThemeLightDarkIcon from 'shared/assets/icons/theme-light-dark.svg'


export const App = () => {
    const {theme} = useTheme()

    return <div className={classNames('app', {}, [theme])}>
        <Navbar/>

        <ThemeLightDarkIcon  />

        <ThemeSwitcher />

        <AppRouter/>
    </div>
}
