import App from '../App';
import { mount } from 'enzyme'

it('renders learn react link', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find('.App-link')).toHaveLength(1)
});
