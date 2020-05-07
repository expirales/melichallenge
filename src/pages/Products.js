import React, { Component } from 'react';
import { HomeLayout } from '../components/layouts/index'
import { ProductList, Breadcrumb } from '../components/index'
import qs from 'query-string';

export default class Products extends Component {

    state = {
        products: [],
        breadcrumb: ''
    }

    async componentDidMount() {
        try {
            const { products, categories } = await this.handleSearchProducts();
            const breadcrumb = this.handleBreadcrum(categories);
            this.setState({ products, breadcrumb })
        }
        catch (e) {
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
            const searchParam = qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).search;
            const searchProducts = await fetch(`/api/items?q=${searchParam}`);
            const { items: products, categories } = await searchProducts.json();
            return { products, categories };
        }
        catch (e) {
            return console.log(e)
        }
    }
    render() {
        return (
            <HomeLayout>
                <Breadcrumb breadcrumb={this.state.breadcrumb} />
                <div>
                    {this.state.products.map(product => {
                        return <ProductList item={product} key={product.id} />
                    })}
                </div>
            </HomeLayout>
        );
    }
}