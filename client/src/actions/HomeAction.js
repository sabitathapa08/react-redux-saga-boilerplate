import action from '../utils/actionCreators';
import * as types from '../constants/HomeConstant';

export const getNewsRequest = action(types.GET_NEWS_REQUEST);
export const getNewsSuccess = action(types.GET_NEWS_SUCCESS);
export const getNewsFailure = action(types.GET_NEWS_FAILURE);
