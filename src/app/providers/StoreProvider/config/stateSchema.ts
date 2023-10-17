import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User/types/user';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginForm: LoginSchema;
}
