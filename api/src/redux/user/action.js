import axios from "axios";
import { LOAD_USER, LOAD_USER_ERROR, LOAD_USER_SUCCESS } from "./type";

export const loadUser = () => {
    return {
        type : LOAD_USER
    }
}

export const loadUserSuccess = user => {
    return {
        type : LOAD_USER_SUCCESS,
        payload : user
    }
}

export const loadUserError = msg => {
    return {
        type : LOAD_USER_ERROR,
        payload : msg
    }
}

export const apiCall = () => {
    return dispacth => {

        //dispatcher l'action loadUser
        dispacth(loadUser())
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            //dispatcher l'action loadUserSuccess
            dispacth(loadUserSuccess(res.data))
        })
        .catch(err=>{
            //dispatcher l'action loadUserError
            dispacth(loadUserError(err.message))
        })
    }
}


