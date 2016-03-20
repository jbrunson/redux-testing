import { renderComponent , expect } from '../test_helper';
import CommentList from '../../src/components/CommentList';

describe('CommentList', () => {
  let component;
  const props = { comments: ['New Comment', 'Other New Comment'] };

  beforeEach(() => {
    component = renderComponent(CommentList, null, props);
  });

  it('shows an li for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('shows each comment that is provided', () => {
    expect(component).to.contain('New Comment');
    expect(component).to.contain('Other New Comment');
  });
});