import React from 'react'
import {mount} from 'enzyme'
import {HashRouter} from 'react-router-dom'
import Dashboard from '../components/Dashboard/Dashboard'
import App from '../components/App'

describe('<HashRouter/>', () => {
  it('should not render <Dashboard /> component', () => {


    const wrapper = mount(
      <HashRouter initialEntries={[ '/wrong_way' ]}>
        <App />
      </HashRouter>
    );

    expect(wrapper.find(Dashboard).toHaveLength(0));
  });
});