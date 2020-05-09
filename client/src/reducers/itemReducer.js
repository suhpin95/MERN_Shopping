import { v4 as uuidv4 } from "uuid";
import { DELETE_ITEMS, POST_ITEMS, GET_ITEMS } from "../actions/actionType";
const initialState = {
    items : [
        {
            id: uuidv4(),
            name : "Book"
        },
        {
            id: uuidv4(),
            name : "Pen"
        },
        {
            id: uuidv4(),
            name : "Pencil"
        },
        {
            id: uuidv4(),
            name : "Eraser"
        }
    ]

}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state    
            };    
        case DELETE_ITEMS:
            console.log("reducers")
            return {
                ...state,
                items : state.items.filter( item=> item.id !== action.id )
            }
        case POST_ITEMS:
            return {
                ...state,
                items : [action.payload, ...state.items]
            }
        default:
            return state
            
    }
}