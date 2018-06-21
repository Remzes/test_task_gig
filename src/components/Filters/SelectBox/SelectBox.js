import React, {Component} from 'react'
import Select from 'react-select'
import {connect} from 'react-redux';
import _ from 'lodash'
import {filterTypesSelector} from '../../../selectors/index'
import {selectTypes} from "../../../actions/index"

class SelectBox extends Component {

  handleTypesSelect = selected => this.props.selectTypes(selected.map(val => val.value))

  render() {
    const {types, filterTypes} = this.props;
    const uniqTypes = _.uniq(_.concat.apply([], types)).map(val => ({
      label: val,
      value: val
    }));
    return (
      <section className="select-box">
        <Select autosize={false} options={uniqTypes} value={filterTypes} onChange={this.handleTypesSelect} multi />
      </section>
    )
  }
}

export default connect((state) => ({filterTypes: filterTypesSelector(state)}), {selectTypes})(SelectBox)