import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    test('render button component', () => {
        render(<Button>Test</Button>);

        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('applies className', () => {
        const testClassName = 'test-class';
        render(<Button className={testClassName}>Click me</Button>);
        expect(screen.getByRole('button')).toHaveClass(testClassName);
    });

    test('uses default theme when none is provided', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByRole('button')).toHaveClass('clear');
    });

    test('renders children', () => {
        const childText = 'Click me';

        render(<Button>{childText}</Button>);
        expect(screen.getByRole('button')).toHaveTextContent(childText);
    });

    test('handles click event', () => {
        const handleClick = jest.fn();

        render(<Button onClick={handleClick}>Click me</Button>);

        fireEvent.click(screen.getByRole('button'));
        fireEvent.click(screen.getByRole('button'));

        expect(handleClick).toHaveBeenCalledTimes(2);
    });
});
