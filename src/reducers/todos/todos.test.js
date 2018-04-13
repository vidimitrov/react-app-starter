import todosReducer from './todos';
import {RECEIVE_TODOS} from '../../constants/actionTypes';

describe('Todos reducer', () => {
  let state;

  describe('when todos are received', () => {
    beforeEach(() => {
      state = todosReducer({}, {
        type: RECEIVE_TODOS,
        todos: [
          {
            id: 1,
            text: 'Go to the supermarket',
            completed: false,
          },
          {
            id: 2,
            text: 'Take the dog for a walk',
            completed: true,
          },
        ],
      });
    });

    it('contains the todos from the action', () => {
      expect(state[0]).toEqual({
        id: 1,
        text: 'Go to the supermarket',
        completed: false,
      });
      expect(state[1]).toEqual({
        id: 2,
        text: 'Take the dog for a walk',
        completed: true,
      });
    });

    it('contains no other todos', () => {
      expect(state[2]).toEqual(undefined);
    });
  });
});
