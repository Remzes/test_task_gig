import React, {Component} from 'react'
import Loader from '../components/Loader/Loader'

export default (OriginalComponent) => class WrappedComponent extends Component {

  renderComponent = () => (
    this.props.fetched
     ? <OriginalComponent {...this.props} />
     : <Loader />
  );

  render(){
    return this.renderComponent()
  }
}