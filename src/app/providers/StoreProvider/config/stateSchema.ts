import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User/types/user';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
}
