import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL';

export const ADD_SMURF = 'ADD_SMURF';

export const NEW_ERROR = 'NEW_ERROR';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
export const fetchSmurfs = () => (dispatch) => {
    dispatch({ type: FETCH_SMURF_START });

    axios.get("http://localhost:3333/smurfs")
      .then(res => {
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
      })
    .catch(err => {
      dispatch({ type: FETCH_SMURF_FAIL, payload: err });
    })
}

//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
export const addSmurf = (newSmurf) => {
    return {
        type: ADD_SMURF,
        payload: newSmurf,
    }
}

//3. Add a standard action that allows us to set the value of the error message slice of state.
export const newError = (err) => {
    return {
        type: NEW_ERROR,
        payload: err,
    }
}