import { LoginSchema } from 'features/AuthByUsername';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { DeepPartial } from '@reduxjs/toolkit';

describe('loginSlice', () => {
    test('set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };

        expect(loginReducer(state as LoginSchema, loginActions.setUsername('name')))
            .toEqual({ username: 'name' });
    });

    test('set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };

        expect(loginReducer(state as LoginSchema, loginActions.setPassword('password')))
            .toEqual({ password: 'password' });
    });
});
