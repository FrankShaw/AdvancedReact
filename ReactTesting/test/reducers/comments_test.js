import {expect} from '../test_helper';
import CommentReducer from '../../src/reducers/comments';
import * as ActionTypes from '../../src/actions/types';

describe('Comments reducer', () => {
  it('handles action with unknown type', () => {
    const state = CommentReducer(undefined, {});
    expect(state).to.eql([]);
  });

  it('SAVE_COMMENT', () => {
    const action = {type: ActionTypes.SAVE_COMMENT, payload: 'Comment'};
    const state = CommentReducer([], action);
    expect(state).to.eql(['Comment']);
  });
});