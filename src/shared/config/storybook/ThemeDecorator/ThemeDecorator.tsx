import 'app/styles/index.scss';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: any) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
