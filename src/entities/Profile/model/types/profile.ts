import { Country } from 'shared/const/common';
import { Currency } from 'entities/Currency';

export interface Profile {
    first?: string;
    lastname?: string;
    age?: number;
    currency?: Currency;
    county?: Country;
    city?: string;
    username?: string;
    avatar?: string
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
