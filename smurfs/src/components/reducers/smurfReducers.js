import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_ERROR } from '../actions/smurfActions'

const initialState = {
    smurfs: [
        {
            name: '',
            age: 0,
            height: ''
    }
    ],
    loading: false,
    error: ''
}

export function smurfReducers(state = initialState, action) {
    switch(action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                loading: true
            }
        case FETCH_SMURF_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case FETCH_SMURF_SUCCESS: 
            return {
                ...state,
                loading: false,
                smurfs: action.payload
            }
        default: 
            return state
    }
}