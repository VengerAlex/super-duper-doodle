import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_LS_KEY } from 'shared/const/localStorage';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            // @ts-ignore
            const response = await thunkAPI.extra.api.post<User>('/login', authData);

            if (!response.data) {
                throw new Error('error');
            }

            localStorage.setItem(USER_LS_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(i18n.t('You have entered incorrect username or password'));
        }
    },
);
