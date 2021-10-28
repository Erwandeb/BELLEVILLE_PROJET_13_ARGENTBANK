import axios from 'axios';

export const GET_USERS = "GET_USERS";

export const getUser = () => {
    return (dispatch) => {
        return axios.get('http://localhost:3001/api/v1/user/signup')
        .then((res)=>{
            dispatch({
                type: GET_USERS,
                payload: res.data
            })
        })
        .catch((err) => console.log(err))
    }
}