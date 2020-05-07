import React from 'react';
import ReactDOM from 'react-dom';
import ProductDetail from './ProductDetail';

let item;

describe('Product List Component', () => {

    it('Fetch Product by Id without crashing', async () => {
        const product = await fetch('http://localhost:3001/api/items/MLA850579616')
        item = await product.json();
        expect.objectContaining(item)
    });

    test('Show ProductDetail Component without crashing', async () => {
        const div = document.createElement('div');
        ReactDOM.render(<ProductDetail item={item} price={item.price} />, div);
    });
})


