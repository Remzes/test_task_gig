import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default (OriginalComponent) => class WrappedComponent extends Component {

  renderComponent = () => (
    <ReactCSSTransitionGroup
      transitionName={this.props.choice}
      transitionAppear
      transitionEnter={false}
      transitionLeave={false}
    >
      <OriginalComponent {...this.props} />
    </ReactCSSTransitionGroup>
  );

  render(){
    return this.renderComponent()
  }
}