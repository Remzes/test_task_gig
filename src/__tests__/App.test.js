import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import App from '../components/App'

configure({adapter: new Adapter()});

describe('<App />' ,() => {
    it ('renders <App /> component', () => {
        const component = shallow(<App />);
        expect(component).toHaveLength(1)
    })
});