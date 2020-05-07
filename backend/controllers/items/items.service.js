import * as fetch from 'node-fetch';

export default class Items {
    constructor() {
        this.url = `${process.env.API_ML_URL}/sites/MLA/search?limit=4&q=`
    }

    async searchItems( endpoint, searchParam ) {
        let searchItems;
        if( searchParam ){
            searchItems = await fetch(`${endpoint}${searchParam}`);
        }
        else{
            searchItems = await fetch(endpoint);
        }
        return await searchItems.json();
    }

    signFirm() {
        return { author: { name: process.env.NAME_FIRM, lastname: process.env.LASTNAME_FIRM } };
    }

    setItemOutputFormat(oItems) {
        const items = oItems.map(item => {
            const { id, title, thumbnail: picture, condition, shipping: { free_shipping } } = item;
            const price = this.setPriceOutputFormat(item);
            return { id, title, price, picture, condition, free_shipping }
        })
        return { items };
    }

    async getItems( searchParam ) {
        const searchItems = await this.searchItems( this.url, searchParam );
        const { results:items, filters:categories } = searchItems;
        
        if(!(items && items.length)){
            return Object.assign( this.signFirm(), { items }, { categories } );
        }  
        
        const { available_filters: { [0]: { values: otherCategories } } } = searchItems;
        const formatItems = this.setItemOutputFormat(items)
        const formatCategories = this.setCategoriesOutputFormat( categories, otherCategories );
        
        return Object.assign(this.signFirm(), formatItems, formatCategories);
    }

    setCategoriesOutputFormat(oCategories,oOtherCategories) {
        const categories = oCategories.length > 0 
            ? this.setItemCategoriesFormat(oCategories) 
            : this.setItemAltCategoriesFormat(oOtherCategories);
        
        return { categories }
    }

    setItemCategoriesFormat(oCategories) {
        const category = (oCategories.filter(({ id }) => id = "category"))[0]
        const exactCategoryPath = category.values[0].path_from_root.map(p => p.name)
        return exactCategoryPath;
    }

    setItemAltCategoriesFormat(oCategories) {
        const category = oCategories.reduce((prev, current) => (prev.results > current.results) ? prev : current);
        const { name } = category
        return [name];
    }

    setPriceOutputFormat(item) {
        const { price: amount, currency_id: currency } = item;
        const decimals = this.setPriceFormat(amount);
        return { amount, currency, decimals }
    }

    setPriceFormat( price ) {
        return Number(((price - Math.floor(price)) * 100).toFixed(0));
    }

}