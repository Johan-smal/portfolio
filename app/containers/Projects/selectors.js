import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the projects state domain
 */

const selectProjectsDomain = state => state.get('projects', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Projects
 */

const makeSelectProjects = () =>
  createSelector(selectProjectsDomain, substate => substate.toJS());

export default makeSelectProjects;
export { selectProjectsDomain };
