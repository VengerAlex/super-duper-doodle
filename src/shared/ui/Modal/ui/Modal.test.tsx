import { render, screen } from '@testing-library/react';
import { Modal } from 'shared/ui/Modal';

describe('Modal', () => {
    test('render children inside modal', () => {
        render(<Modal>Test</Modal>);

        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
