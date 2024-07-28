import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/config/tests/componentRender/componentRender';
import { Counter } from 'entities/Counter';

describe('Counter', () => {
    test('should render initial value', () => {
        // @ts-ignore
        componentRender(<Counter />, { initialState: { counter: { value: 0 } } });

        expect(screen.getByTestId('value-title')).toHaveTextContent('0');
    });

    test('should increment and decrement value', () => {
        // @ts-ignore
        componentRender(<Counter />, { initialState: { counter: { value: 0 } } });

        const counterValue = screen.getByTestId('value-title');
        const incrementBtn = screen.getByTestId('increment-btn');
        const decrementBtn = screen.getByTestId('decrement-btn');

        fireEvent.click(incrementBtn);
        expect(counterValue).toHaveTextContent('1');

        fireEvent.click(incrementBtn);
        expect(counterValue).toHaveTextContent('2');

        fireEvent.click(decrementBtn);
        expect(counterValue).toHaveTextContent('1');
    });
});
