import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    profileActions,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import ProfilePageHeader from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency';

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const dispatch = useAppDispatch();

    const data = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readOnly = useSelector(getProfileReadonly);

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onChangeFirstname = (value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    };

    const onChangeLastname = (value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    };

    const onChangeAge = (value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value) || 0 }));
    };

    const onChangeCity = (value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    };

    const onChangeUsername = (value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    };

    const onChangeAvatar = (value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    };

    const onChangeCurrency = (value: Currency) => {
        dispatch(profileActions.updateProfile({ currency: value }));
    };

    return (
        <DynamicModuleLoader reducers={reducers}>
            <ProfilePageHeader />
            <ProfileCard
                data={data}
                isLoading={isLoading}
                error={error}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeUsername={onChangeUsername}
                onChangeAvatar={onChangeAvatar}
                onChangeCurrency={onChangeCurrency}
                readOnly={readOnly}
            />
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
