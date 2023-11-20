import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesDetailsData = (state: StateSchema) => state.articleDetails?.data;
export const getArticlesIsLoading = (state: StateSchema) => state.articleDetails?.isLoading;
export const getArticlesError = (state: StateSchema) => state.articleDetails?.error;
