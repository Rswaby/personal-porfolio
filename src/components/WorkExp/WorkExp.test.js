
/* eslint-disable */
import React from 'react';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import WorkExp from './WorkExp'
import renderer from 'react-test-renderer';

enzyme.configure({ adapter: new Adapter() });



describe('<Navbar /> ', () => {
    const work = {
        "company":"Bright Power",
        "image":"https://pbs.twimg.com/profile_images/634075551964106752/pBN6np7z_400x400.jpg",
        "title":"Software Developer Intern",
        "years":"Jan 2017 - August 2017",
        "stack": [
          {"name":"Java"},
          {"name":"Python"},
          {"name":"Spring boot"},
          {"name":"testing: JUnit, Mockito"}
        ],
        "description":"During My Time at Bright Power some of my Responsibilities including Writing unit testing for Spring MVC application for REST controllers using JUnit, Mockito. I also Created test suite for newly created API services using postman to examine performance. I Conducted other QA responsibilities such as regression/feature testing in order to identify Defects in pre-released software. One project I worked on creating and maintaining a data scraping tool using selenium and beautifulsoup for internal use."
      }
    it('should render correctly', () => {
        const mock = jest.fn();
        const wrapper = mount(<WorkExp work={work} />);
    });
    test('<Navbar/> snapshot', () => {
        ///
        const component = renderer.create(<WorkExp work={work} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();

    })

})
