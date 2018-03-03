import { renderComponent , expect } from '../test_helper';
import App from '../../src/containers/App';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shows a bundle list', () => {
    expect(component.find('.bundle-list')).to.exist;
  });
});
