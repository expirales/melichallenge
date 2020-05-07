import fetch from 'node-fetch'
import Items from './items.service';

export default class ItemDetail extends Items {
    constructor( itemId ) {
        super();

        this.url_productId = `${process.env.API_ML_URL}/items/${itemId}`;
        this.url_productDescription = `${process.env.API_ML_URL}/items/${itemId}/description`;
        this.url_productCategory = `${process.env.API_ML_URL}/categories/`;
    }

    setItemOutputFormat(oItems) {
        const items = oItems.map(item => {
            const { id, title, thumbnail: picture, condition, shipping: { free_shipping }, sold_quantity } = item;
            const price = this.setPriceOutputFormat(item);
            return { id, title, price, picture, condition, free_shipping, sold_quantity }
        })
        return { items };
    }
    async getItemByCategory( category_id, title ) {
        const itemCategory = await fetch(`${this.url_productCategory}${category_id}`)
        const { path_from_root:category } = await itemCategory.json();
        const breadcrumb = category.map( cat => cat.name);  
        breadcrumb.push(title);
        return breadcrumb;

    }
    async getItemById() {
        const searchItem = await this.searchItems( this.url_productId );
        const { plain_text:description } = await this.searchItems( this.url_productDescription );
        
        const { category_id, title } = searchItem;
        const category = await this.getItemByCategory( category_id, title )
        
        const {items:[item] } =this.setItemOutputFormat([searchItem])
        
        return Object.assign( item, { description, category } );
    }
}