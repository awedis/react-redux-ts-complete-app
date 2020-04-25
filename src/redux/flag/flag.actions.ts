import { FlagActionTypes } from './flag.types';

export const setCurrentFLag = (payload: string) => {
    console.log(payload);
    return {
        type: FlagActionTypes.SET_FLAG,
        payload
    }
};