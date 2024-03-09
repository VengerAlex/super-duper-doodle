import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from 'entities/Counter';
import { getCounterValue } from 'entities/Counter/modal/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const onIncrement = () => {
        dispatch(counterActions.increment());
    };

    const onDecrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="increment-btn" onClick={onIncrement}>Increment</Button>
            <Button data-testid="decrement-btn" onClick={onDecrement}>Decrement</Button>
        </div>
    );
};
