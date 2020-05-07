import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './ProductList.scss';

export default class ProductList extends Component {
    render() {
        return (
            <div className="center">
                <li className="card">
                    <div className="card-item-picture">
                        {this.props.breadcrum}
                        <Link to={`/items/${this.props.item.id}`}>
                            <img src={this.props.item.picture} alt="product"/>
                        </Link>
                    </div>
                    <div className="content-item-list">
                        <h3>$ {this.props.item.price.amount} </h3>
                        <p>{this.props.item.title}</p>
                    </div>
                </li >
            </div>
        )
    }
}