import { DELETE_ITEMS, POST_ITEMS, GET_ITEMS, LOADING_ITEMS } from "../actions/actionType";
const initialState = {
    items : [],
    loading : false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state,
                items : action.payload,
                loading : false
            };    
        case DELETE_ITEMS:
            return {
                ...state,
                items : state.items.filter( item=> item._id !== action.id )
            }
        case POST_ITEMS:
            return {
                ...state,
                items : [action.payload, ...state.items]
            }
        case LOADING_ITEMS :
            return{
                ...state,
                loading : true
            }    
        default:
            return state
            
    }
}