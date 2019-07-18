/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');
const selectRoute = state => state.get('router');

const makeSelectError = () => createSelector(selectGlobal, state => state.get('error'));
const makeSelectLocation = () => createSelector(selectRoute, state => state.location);

export {
  makeSelectError,
  makeSelectLocation
};
