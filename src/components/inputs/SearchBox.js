import React, { Component } from 'react';
import './SearchBox.scss';

export default class SearchBox extends Component {
   render() {
        return (
            <form className="form-inline my-2 my-lg-0" method="GET" action="/items">
                <input 
                    className="searchbox searchbox-style"
                    type="search"
                    name="search"
                    placeholder="No pares de comprar!"
                    aria-label="Buscar productos"
                    onChange={this.handleSearchParams} />
                <button className="navbar-search-button" type="submit"><img className="navbar-search-icon" src={process.env.PUBLIC_URL + '/search.png'} alt="logo" /></button>
            </form>
        )
    }
}