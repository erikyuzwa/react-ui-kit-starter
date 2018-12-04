// @flow
import {shallow} from 'enzyme';
import AlertComponent from '../Alert';

describe('AlertComponent suite', () => {
  it('should render the AlertComponent', () => {
    const wrapper = shallow(<AlertComponent />);
    expect(wrapper.find('span').text()).toEqual('Hello world, I am a component!');
  });
});
