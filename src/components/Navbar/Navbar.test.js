
/* eslint-disable */
import React from 'react';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import Navbar from './Navbar';
import renderer from 'react-test-renderer';

enzyme.configure({ adapter: new Adapter() });



describe('<Navbar /> ', () => {
    it('should render correctly', () => {
        const mock = jest.fn();
        const wrapper = mount(<Navbar />);
    });
    test('<Navbar/> snapshot', () => {
        ///
        const component = renderer.create(<Navbar />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();

    })

})
