import React, { Component } from 'react';
import './SearchResults.css';
import axios from 'axios';
import TableRow from '../TableRow';
import Favourites from '../Favourites';

class SearchResults extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.removeFave = this.removeFave.bind(this);
        this.queryVersion = this.queryVersion.bind(this);
        this.state = {
            repo: [],
            version: [],
            search:"",
            favourites: []
        }
    }
//listen for changes in search input
    handleChange(event) {
        this.setState({
            search: event.target.value
        });
    }
//adds repo to favourites
    handleClick = (id) => {
        this.setState({
            favourites: this.state.favourites.concat(id)
        })
    }
//removes repo from favourites
    removeFave(id){
        let newArrayFaves = this.state.favourites.filter(x => {return x.id !== id});
        this.setState({
            favourites: [...newArrayFaves]
        })
    }
//on submit, queries GitHub API
    handleSubmit(event) {
        event.preventDefault();
        this.searchResults();
    }

//adds first 10 API responses to state
    searchResults = () => {
        let query = this.state.search;
          axios.get(`https://api.github.com/search/repositories?q=${query}`)
              .then(response => {
                let slice = response.data.items.slice(0, 10);
                this.setState({
                    repo: slice
                })
                this.queryVersion(this.state.repo);
            })
        }
//queries API for latest version of repo
    queryVersion = (repo) => {
        repo.map((res) => {
            axios.get(`https://api.github.com/repos/${res.full_name}/releases/latest`)
                .then(function (res) {
                    let vers = res.data.name;
                    console.log(vers);
                    if (!vers) {
                        let noVers = this.version.state.concat("-");
                        this.setState({
                            version: noVers
                        })
                    } else {
                        let yesVers = this.version.state.concat(vers);
                        this.setState({
                            version: yesVers
                        })
                    }
                })
                .catch(error => {
                    console.log(error)
                });
        }
        );
    };

  render() {
    return (
    <main>
      <section className="searchResults">
            <label for="searchInput" className="visuallyhidden">Search Input</label>

            <input type="text" placeholder="Shopify" id="searchInput" onChange={this.handleChange}/>

            <button type="submit" id="submit" onClick={this.handleSubmit}>Search</button>
        <table>
            <thead>
                <tr className="SearchResults__thead">
                    <th className="SearchResults__name">Name</th>
                    <th>Language</th>
                    <th>Latest tag</th>
                    <th className="SearchResults__addbutton"></th>
                </tr>
            </thead>
            <tbody>
                {this.state.repo.map(repo => (
                    <TableRow repo={repo.full_name} key={repo.id} language={repo.language} handleClick ={this.handleClick} id={repo.id} version={this.state.version}/ >
                ))
                }
            </tbody>
          </table>
      </section>
            <section className="favourites">
                <table className="Favourites__table">
                    <thead className="Favourites__thead">
                        <tr>
                            <th className="Favourites__name">Name</th>
                            <th>Language</th>
                            <th>Latest tag</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.favourites.map(fave => (
                            <Favourites name={fave.repo} key={fave.id} lang={fave.language} id={fave.id} remove={this.removeFave}/>
                        ))
                        }
                    </tbody>
                </table>
            </section>
    </main>
    );
  }
}

export default SearchResults;

