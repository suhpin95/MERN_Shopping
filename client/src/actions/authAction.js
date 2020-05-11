import axios from "axios";
import { returnErrors } from "./errAction";

import { 
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS } from "../actions/actionType";

    export const loadUser = () => (dispath, getState)=>{
        dispath({
            type: USER_LOADING
        })
        // GET tokens
  
        axios.get("api/auth/user", tokenConfig(getState))
             .then( res=> dispath({
                 type: USER_LOADED,
                 payload : res.data
             }))
             .catch(err=>{
                 dispath(returnErrors(err.res.data, err.response.status));
                 dispath({
                     type : AUTH_ERROR
                 })
             })
    }
   
    export const register = ( { name , emailId, passWord } ) => dispatch => {
        const config = {
            headers : {
                "Content-type" : "application/json"
            }
        }
        const body = JSON.stringify({ name, emailId, passWord });

        axios
            .post('/api/users', body, config)
             .then( res=> dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
             }))
             .catch(err=>{
                //  console.log(err)
                dispatch(
                    returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
                    );
                dispatch({
                    type : REGISTER_FAIL
                })
            })
             
    }
    // Set HEADERS
    export const tokenConfig = getState=> {
        const token = getState().auth.token;

        // HEADERS
        const config = {
            headers :{
                "Content-type" : "application/json"
            }
        }

        if(token){
            config.headers["x-auth-tokens"] = token
        }
        return config; 
    }