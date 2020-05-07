import React, {Component} from 'react';
import { Navbar } from '../index';

export default class HomeLayout extends Component {
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                {this.props.children}
            </React.Fragment>
            )
        }
    }