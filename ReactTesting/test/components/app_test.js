import {renderComponent, expect} from '../test_helper';
import App from '../../src/components/app';

let component;

describe('App', () => {
  it('shows the correct text', () => {
    component = renderComponent(App);
    expect(component).to.contain('React simple starter');
  });
});