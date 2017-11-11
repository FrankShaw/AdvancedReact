import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/comment-list';

describe('Comment List', () => {
  let component;
  const props = {comments: ['Test Comment 1', 'Test Comment 2']};

  beforeEach(() => {
    component = renderComponent(CommentList, null, props);
  });

  it('shows comment in an li', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('shows each comment provided', () => {
    expect(component).to.contain('Test Comment 1');
    expect(component).to.contain('Test Comment 2');
  })
});