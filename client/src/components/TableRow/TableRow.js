import React, { Component } from 'react';
import './TableRow.css';

class TableRow extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.handleChange = this.handleChange.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  //   this.state = {
  //     favourite: []
  //   }
  // }
  // handleChange(event) {
  //   this.setState({
  //     search: event.target.value
  //   });
  // }

  // handleClick(event) {
  //   event.preventDefault();
  //   console.log(this.props);
  //   this.setState({
  //     favourites: this.id
  //   })
  //   // this.searchResults();
  // }
  render() {
    return (
        <tr>
        <td className="SearchResults__name">{this.props.repo}</td>
          <td>{this.props.language}</td>
          <td>{this.props.version}-</td>
          <td className="add-text" onClick={() => this.props.handleClick(this.props)}>
          Add
          </td>
        </tr>
    );
  }
}

export default TableRow;

