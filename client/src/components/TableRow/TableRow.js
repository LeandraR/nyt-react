import React, { Component } from 'react';
import './TableRow.css';

class TableRow extends Component {
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

