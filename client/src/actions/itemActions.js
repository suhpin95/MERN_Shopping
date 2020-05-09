import { DELETE_ITEMS, POST_ITEMS, GET_ITEMS } from "./actionType";

export const getItems = ()=>{
    return {
        type : GET_ITEMS,
    }
}

export const postItem = (item) =>{
    return{
        type : POST_ITEMS,
        payload : item
    }
}

export const deleteItem = id =>{
    console.log("delete dispatched")
    return{
        type : DELETE_ITEMS,
        id
    }
}