import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm, Profile } from 'entities/Profile';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;

        const formData = getProfileForm(getState());

        try {
            const response = await extra.api.put<Profile>('/profile', formData);

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);
