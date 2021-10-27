import axios from 'axios';

export const GET_USERS = "GET_USERS";

export const getUser = () => {
    return (dispatch) => {
        return axios.get('').then((res)=>{
            dispatch({
                type: GET_USERS
            })
        })
    }
}