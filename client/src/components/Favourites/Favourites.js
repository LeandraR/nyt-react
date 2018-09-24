import React, { Component } from 'react';
import './Favourites.css';

class Favourites extends Component {
  render() {
    return (
        <tr>
            <td className="Favourites__name">{this.props.name}</td>
            <td>{this.props.lang}</td>
            <td>-</td>
            <td className="add-text" onClick={() => this.props.remove(this.props.id)}>
            Remove
            </td>
        </tr>
    );
  }
}

export default Favourites;
