import React from 'react'
import {shallow, configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store'
import App from '../components/App'

configure({adapter: new Adapter()});

describe('<App />', () => {
  it('renders 1 <App /> component', () => {
    const component = shallow(<App />);
    expect(component).toHaveLength(1)
  });

  it('renders props in a right way', () => {
    const component = shallow(<App />).dive();
    expect(component.props.name).toEqual('name');
  });
});

describe('App supports passing the store directly', () => {
  const initialState = {data: 'store_data'};
  const mockStore = configureStore();

  let store;
  let container;

  beforeEach(()=>{
    store = mockStore(initialState);
    container = shallow(<App store={store} /> )
  });

  it('renders connected component', () => {
    expect(container.length).toEqual(1)
  });
})