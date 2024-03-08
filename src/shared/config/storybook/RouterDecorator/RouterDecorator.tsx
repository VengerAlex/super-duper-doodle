import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { ReactNode } from 'react';

export const RouteDecorator = (story: () => ReactNode) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);
