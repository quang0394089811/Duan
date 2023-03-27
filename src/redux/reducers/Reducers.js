import { ADD_TO_CART, ADD_TO_WISHLIST, REMOVE_FORM_CART, REMOVE_FORM_WISHLIST } from "../ActionTypes";

export const Reducers = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload];
        case REMOVE_FORM_CART:
            const deletedArray1 = state.filter((item, index) => {
                return index !== action.payload;
            });

            return deletedArray1;
        default:
            return state;
    }
};
