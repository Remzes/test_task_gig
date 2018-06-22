import React, {Component} from 'react'
import Loader from '../components/Loader/Loader'
import ErrorHolder from '../components/ErrorHolder/ErrorHolder';

export default (OriginalComponent) => class WrappedComponent extends Component {

  renderComponent = () => (
    this.props.fetched
     ? <OriginalComponent {...this.props} />
     : <Loader />
  );

  renderLogic = () => (
    this.props.isError
    ? <ErrorHolder />
    : this.renderComponent()
  );

  render(){
    return this.renderLogic()
  }
}