import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from 'features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading';

describe('getLoginLoading', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            // @ts-ignore
            loginForm: {
                isLoading: true,
            },
        };

        expect(getLoginIsLoading(state as StateSchema)).toBeTruthy();
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
