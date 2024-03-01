import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import { renderWIthTranslations } from 'shared/lib/tests/renderWIthTranslations';

describe('Sidebar', () => {
    test('renders theme & lang switcher with toggle button', () => {
        renderWIthTranslations(<Sidebar />);

        expect(screen.getByTestId('toggleSidebar')).toBeInTheDocument();
        expect(screen.getByTestId('changeTheme')).toBeInTheDocument();
        expect(screen.getByTestId('changeLanguage')).toBeInTheDocument();
    });

    test('toggle sidebar functionality', () => {
        renderWIthTranslations(<Sidebar />);
        const sidebar = screen.getByTestId('sidebar');

        const toggleSidebarButton = screen.getByTestId('toggleSidebar');

        expect(sidebar).not.toHaveClass('collapsed');

        fireEvent.click(toggleSidebarButton);
        expect(sidebar).toHaveClass('collapsed');

        fireEvent.click(toggleSidebarButton);
        expect(sidebar).not.toHaveClass('collapsed');
    });
});
