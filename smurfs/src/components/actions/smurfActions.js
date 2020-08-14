import axios from 'axios'

export const FETCH_SMURF_START = 'FETCH_SMURF_START'
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS'
export const FETCH_SMURF_ERROR = 'FETCH_SMURF_ERROR'

export const POST_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS'
export const POST_SMURF_ERROR = 'POST_SMURF_ERROR'

export const fetchSmurfs = () => (dispatch) => {
    dispatch({ type: FETCH_SMURF_START })

    axios.get(`http://localhost:3333/smurfs`)
        .then(res => {
            // console.log(res)
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data})
        })
        .catch(err => {
            // console.log(err)
            dispatch({ type: FETCH_SMURF_ERROR, payload: err.message})
        })
}

export const postNewSmurf = (input) => (dispatch) => {
    axios.post(`http://localhost:3333/smurfs`)
    .then(res => {
        dispatch({ type: POST_SMURF_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({ type: POST_SMURF_ERROR, payload: err})
    }) 
}



