import React, { Component } from 'react';
import './ProductDetail.scss';

export default class ProductDetail extends Component {
    render() {
        return (
            <div className="center">
                <div className="item-card-detail">
                    <div className="item-card-detail-picture">
                       <img src={this.props.item.picture} alt="pic-detail" />
                       <h3>Descripción del producto  </h3>
                       <p className="item-card-description">{this.props.item.description}</p>
                    </div>
                    <div className="content-item-detail">
                        <p>{this.props.item.condition === 'new' ? 'Nuevo':'Usado'}: {this.props.item.sold_quantity} unidades vendidas. </p>
                        <h3>{this.props.item.title} </h3>
                        <h2>$ {this.props.price.amount} </h2>
                        <button className="btn-buy-detail">Comprar</button>
                    </div>
                </div >
            </div>
        )
    }
}