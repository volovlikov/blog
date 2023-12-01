import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';

export {
    StoreProvider,
    createReduxStore,
};

import type { 
    StateSchema, 
    ThunkConfig 
} from './config/StateSchema';

export type {
    StateSchema,
    AppDispatch,
    ThunkConfig,
};
