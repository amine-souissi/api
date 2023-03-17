import { LOAD_USER, LOAD_USER_ERROR, LOAD_USER_SUCCESS } from "./type"

const initState = {
    isLoading : false,
    users : [],
    error : ''
}

export const reducer = (state=initState, action) => {
    switch (action.type) {
        case LOAD_USER:
            return {
                ...state, isLoading : true
            }

        case LOAD_USER_SUCCESS:
            return {
                ...state,
                isLoading : false, 
                users : action.payload, 
                error : ''
            }

        case LOAD_USER_ERROR:
            return {
                ...state,
                isLoading : false,
                users : [],
                error : action.payload 
            }

        default: return state
    }
}


