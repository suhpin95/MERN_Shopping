import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

const initialState = {}

const middleWare = [ thunk ]

// const enhancers =  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;


const store = createStore(rootReducer, initialState , compose(
    applyMiddleware(...middleWare),
    // enhancers
))
 
export default store;