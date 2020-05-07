import React, {Component} from 'react';
import './Navbar.scss';

import { SearchBox } from '../index';

export default class Navbar extends Component {
    render(){
        return (
            <header className="container">
                <nav className="navbar bg-navbar">
                    <a className="navbar-logo" href="/">-</a>
                    <SearchBox/>
                </nav>
            </header>
            )
        }
    }