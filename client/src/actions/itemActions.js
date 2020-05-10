import { DELETE_ITEMS, POST_ITEMS, GET_ITEMS, LOADING_ITEMS } from "./actionType";
import axios from "axios"

export const getItems = ()=> dispatch =>{
    dispatch(setLoadingItems());
    axios
        .get('/api/items')
        .then(res => 
            dispatch({
                type : GET_ITEMS,
                payload : res.data
            })
        )
        .catch(err=>console.log(err));
}

export const postItem = (item) => dispatch=>{
    console.log("Post")
    axios
        .post('/api/items' , item)
        .then(res=> dispatch=>({
            type : POST_ITEMS,
            payload : res.data
            })
        )
        .catch(err => console.log(err));

}

export const deleteItem = id => dispatch=>{
    axios
        .delete(`/api/items/${id}`)
        .then(res=> dispatch=>({
            type : DELETE_ITEMS,
            id
        }))
        .catch(err=> console.log(err))
}

export const setLoadingItems = ()=> {
    return{
        type : LOADING_ITEMS
    }
}