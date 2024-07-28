import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from 'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';

describe('getLoginPassword', () => {
    test('should return passed value', () => {
        const state: DeepPartial<StateSchema> = {
            // @ts-ignore
            loginForm: {
                password: 'password',
            },
        };

        expect(getLoginPassword(state as StateSchema)).toEqual('password');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
