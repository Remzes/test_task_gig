import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchPokemons, storedBoxValue} from "../../../actions/index"

class SearchBox extends Component {

  onPressEnter = ev => {
    if (ev.keyCode === 13) {
      this.searchBox()
    }
  };

  changeInputBox = ev => {
    this.props.storedBoxValue(ev.target.value);
    if (ev.target.value === '') {
      this.props.searchPokemons('')
    }
  };

  searchBox = () => {
    this.props.searchPokemons(this.props.storedValue.toLowerCase())
  };

  render() {
    return (
      <div className="search-box">
        <input id="search_by_name_input" placeholder="Search By Name" value={this.props.storedValue} onChange={this.changeInputBox} onKeyUp={this.onPressEnter} />
        <button onClick={this.searchBox}>Search</button>
      </div>
    )
  }
}

export default connect((state) => ({storedValue: state.filters.storedBoxValue}),{searchPokemons, storedBoxValue})(SearchBox)