import { createSelector } from 'reselect';

const homeSelector = state => state.global.homeReducer;

const makeSelectGetResponse = () => createSelector(homeSelector, state => state.get('data'));

export {
    makeSelectGetResponse
};