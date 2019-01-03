
/* eslint-disable */
import React from 'react';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import ProfileCard from './ProfileCard'
import renderer from 'react-test-renderer';

enzyme.configure({ adapter: new Adapter() });



describe('<Navbar /> ', () => {
    it('should render correctly', () => {
        const mock = jest.fn();
        const wrapper = mount(<ProfileCard />);
    });
    test('<Navbar/> snapshot', () => {
        ///
        const component = renderer.create(<ProfileCard />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();

    })

})
