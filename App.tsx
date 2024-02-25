import './src/styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import React, {Suspense, useContext} from "react";
import {useTheme} from "./src/theme/useTheme";
import {classNames} from "./src/helpers/classNames";

const AboutPageAsync = React.lazy(() => import('./src/pages/AboutPage'))
const DashboardPageAsync = React.lazy(() =>
    // @ts-ignore
    new Promise(resolve => setTimeout(() => resolve(import('./src/pages/DashboardPage')), 1000))
)

export const App = () => {
    const {theme, onThemeChange} = useTheme()

    return <div className={classNames('app', {}, [theme])}>
        <button onClick={onThemeChange}>Change Theme</button>

        <Link to='/about'>ABOUT</Link>
        <Link to='/'>HOME</Link>

        <Suspense fallback={<h1>Loading..</h1>}>
            <Routes>
                <Route path='/about' element={<AboutPageAsync />} />
                <Route path='/' element={<DashboardPageAsync />} />
            </Routes>
        </Suspense>
    </div>
}
