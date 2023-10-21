import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '1997' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('1997'),
        )).toEqual({ username: '1997' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '1997' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('1997'),
        )).toEqual({ password: '1997' });
    });
});
