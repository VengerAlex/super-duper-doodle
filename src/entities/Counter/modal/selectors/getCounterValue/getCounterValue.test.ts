import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from 'entities/Counter/modal/selectors/getCounterValue/getCounterValue';

describe('getCounterValue', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };

        const returnedValue = getCounterValue(state as StateSchema);

        expect(returnedValue).toEqual(10);
    });
});
