import visibilityFilterReducer from './visibilityFilter';
import {VisibilityFilters} from '../../constants/visibilityFilters';
import {SET_VISIBILITY_FILTER} from '../../constants/actionTypes';

describe('Visibility filters reducer', () => {
  let state;

  describe('when visibility filter', () => {
    it('is set to SHOW_ALL it is SHOW_ALL', () => {
      state = visibilityFilterReducer(VisibilityFilters.SHOW_ALL, {
        type: SET_VISIBILITY_FILTER,
        filter: VisibilityFilters.SHOW_ALL,
      });
      expect(state).toEqual(VisibilityFilters.SHOW_ALL);
    });

    it('is set to SHOW_COMPLETED it is SHOW_COMPLETED', () => {
      state = visibilityFilterReducer(VisibilityFilters.SHOW_ALL, {
        type: SET_VISIBILITY_FILTER,
        filter: VisibilityFilters.SHOW_COMPLETED,
      });
      expect(state).toEqual(VisibilityFilters.SHOW_COMPLETED);
    });

    it('is set to SHOW_ACTIVE it is SHOW_ACTIVE', () => {
      state = visibilityFilterReducer(VisibilityFilters.SHOW_ALL, {
        type: SET_VISIBILITY_FILTER,
        filter: VisibilityFilters.SHOW_ACTIVE,
      });
      expect(state).toEqual(VisibilityFilters.SHOW_ACTIVE);
    });
  });
});
