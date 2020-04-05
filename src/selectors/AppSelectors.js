/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectRoute = state => state.router;

export const makeSelectLocation = () =>
  createSelector(selectRoute, state => state.location);

const AppSelector = {};
export default AppSelector;
