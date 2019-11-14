import { createSelector } from 'reselect';

const homeSelector = state => state.global.homeReducer;

const makeSelectGetResponse = () =>
  createSelector(homeSelector, state => state.get('data'));
const makeSelectError = () =>
  createSelector(homeSelector, state => state.get('error'));

export { makeSelectGetResponse, makeSelectError };
