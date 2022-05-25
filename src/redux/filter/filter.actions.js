import {FilterTypes} from "./filter.types";

export const setCategoryFilter = (option) => ({
    type:FilterTypes.SET_CATEGORY_FILTER,
    payload:option
})

export const setStatusFilter = (option) => ({
    type:FilterTypes.SET_STATUS_FILTER,
    payload:option
})

