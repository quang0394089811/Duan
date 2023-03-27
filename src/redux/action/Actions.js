import { ADD_TO_CART, ADD_TO_WISHLIST, REMOVE_FORM_CART, REMOVE_FORM_WISHLIST } from "../ActionTypes";


export const addItemToCart = data =>({
    type: ADD_TO_CART,
    payload: data,
});

export const removeFormCart = index =>({
    type: REMOVE_FORM_CART,
    payload: index,
});

export const addToWishlist = data =>({
    type: ADD_TO_WISHLIST,
    payload: data,
});

export const removeFormWishlist = index =>({
    type: REMOVE_FORM_WISHLIST,
    payload: index,
});