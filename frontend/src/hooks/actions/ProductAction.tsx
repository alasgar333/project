import { CATEGORY_REQUEST, CATEGORY_SUCCESS, CATEGORY_FAIL } from '../constans/ProductConstans';

export const categoryRequest = () =>({
    type:CATEGORY_REQUEST,
});

export const categorySuccess = (categorys) =>({
    type:CATEGORY_SUCCESS,
    payload:categorys,
});
export const categoryFail = (error) =>({
    type:CATEGORY_FAIL,
    payload:error,
});
