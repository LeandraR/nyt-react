import React, { Component } from 'react';
import './SearchResults.css';

class SearchResults extends Component {
  render() {
    return (
      <section className="searchResults">
          <input type="text" placeholder="Shopify"/>
          <button type="submit" id="submit">Search</button>

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
                    <td className="add-text">Add</td>
                </tr>
            </tbody>
          </table>
      </section>
    );
  }
}

export default SearchResults;
