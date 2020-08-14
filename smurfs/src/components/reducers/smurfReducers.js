import { FETCH_SMURF_START, 
    FETCH_SMURF_SUCCESS, 
    FETCH_SMURF_ERROR,
    POST_SMURF_START,
    POST_SMURF_SUCCESS,
    POST_SMURF_ERROR
     } from '../actions/smurfActions'

const initialState = {
    smurfs: [],
    loading: false,
    error: '',
    formError: '',
    posting: false

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
        case POST_SMURF_START:
            return {
                ...state,
                formError: '',
                posting: true
            }
            case POST_SMURF_SUCCESS:
                return {
                    ...state,
                    formError: '',
                    posting: false,
                    smurfs: []
                }
                case POST_SMURF_ERROR:
                    return {
                        ...state,
                        formError: action.payload,
                        posting: false
                    }
        default: 
            return state
    }
}