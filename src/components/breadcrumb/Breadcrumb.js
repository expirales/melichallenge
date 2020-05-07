import React, {Component} from 'react';
import './Breadcrumb.scss';

export default class Breadcrumb extends Component {
    render(){
        return (
            <h6 className="breadcrumb">
                {this.props.breadcrumb}
            </h6>
            )
        }
    }