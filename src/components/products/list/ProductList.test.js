import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './ProductList';

let item;

describe('Product List Component', () => {

    it('Fetch Product by Id without crashing', async () => {
        const product = await fetch('http://localhost:3001/api/items?q=play')
        item = await product.json();
        expect.objectContaining(item)
    });

    // test('Show ProductList Component without crashing', async () => {
    //     const div = document.createElement('div');
    //     ReactDOM.render(<ProductList item={item} />, div);
    // });
})


