import { fromJS } from 'immutable';
import {GET_NEWS_REQUEST, GET_NEWS_SUCCESS, GET_NEWS_FAILURE} from './index';

const initialState = fromJS({
    request: false,
    success: false,
    error: '',
    data: {}
})

function homeReducer(state = initialState, action = {}) {
    switch(action.type){
        case GET_NEWS_REQUEST: {
            return state.merge({
                request: true
            })
        }
        case GET_NEWS_SUCCESS: {
            return state.merge({
                request: false,
                success: true,
                data: 'data available'
            })
        }
        case GET_NEWS_FAILURE: {
            return state.merge({
                request: false,
                error: 'something went wrong'
            })
        }
        default: {return state;}
    }
}

export default homeReducer;