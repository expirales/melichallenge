import React, { Component } from 'react';
import { HomeLayout } from '../components/layouts';
import { ProductDetail, Breadcrumb } from '../components/index';
import { Error } from './index';

export default class ProductsDetail extends Component {
    state = {
        product: {},
        price:{},
        breadcrumb:''
    }

    async componentDidMount() {
        try {
            const product = await this.handleSearchProducts();
            const { price, category } = product;
            const breadcrumb = this.handleBreadcrum(category);
            this.setState({ product, price, breadcrumb })
        }
        catch(e){
            this.setState({ product:null })
            return console.log(e)
        }
    }

    handleBreadcrum = (breadcrumb) => {
        if (breadcrumb && breadcrumb.length) {
            return breadcrumb.reduce((prev, next) => `${prev} > ${next}`)
        }
        else {
            return '';
        }
    }
    handleSearchProducts = async () => {
        try {
            const productId = this.props.match.params.id;
            const searchProducts = await fetch(`/api/items/${productId}`);
            const item = await searchProducts.json();
            return item;
        }
        catch(e){
            return console.log(e)
        }
    }
    render() {
        return (
            <HomeLayout>
                <Breadcrumb breadcrumb={this.state.breadcrumb} />
                <div>
                    {this.state.product ? <ProductDetail item={this.state.product} price={this.state.price} /> : <Error/>}
                </div>
            </HomeLayout>
        );
    }
}