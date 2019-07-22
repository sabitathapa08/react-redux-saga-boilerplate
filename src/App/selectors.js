/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = state => state.global;
const selectRoute = state => state.router;

const makeSelectError = () => createSelector(selectGlobal, state => state.get('error'));
const makeSelectLocation = () => createSelector(selectRoute, state => state.location);

export {
  makeSelectError,
  makeSelectLocation
};
