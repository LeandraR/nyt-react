import React, { Component } from 'react';
import './Favourites.css';

class Favourites extends Component {
  render() {
    return (
      <section className="favourites">
          <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Language</th>
                    <th>Latest tag</th>
                    <th>Add</th>
                </tr>
            </thead>
            <tbody>
                {/* //TODO: remove, generate dynamically*/}
                <tr>
                    <td>Shopify/Timber</td>
                    <td>Liquid</td>
                    <td>Latest tag</td>
                    <td className="add-text">Remove</td>
                </tr>
            </tbody>
          </table>
      </section>
    );
  }
}

export default Favourites;
