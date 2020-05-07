/*
Descartado.

const ItemsHelper = {
    signFirm : () => ({ author: { name: process.env.NAME_FIRM, lastname: process.env.LASTNAME_FIRM }}),
    formatResultsItemsResponse: ( oItems ) => {
        const items = oItems.map(item => {
            const { id, title, thumbnail:picture, condition, shipping: { free_shipping } } =  item;
            const price = ItemsHelper.formatPriceResponse( item );
            return {id,title,price,picture,condition,free_shipping}
        })
        return { items } ;
    },
    setOutputItemsResults: ( items, categories, otherCategories ) => {
        const firm = ItemsHelper.signFirm();
        const setCategories = ItemsHelper.formatCategoriesResponse(categories,otherCategories);
        const setItems = ItemsHelper.formatResultsItemsResponse(items)
        return Object.assign(firm,setItems,setCategories);
    },
    formatCategoriesResponse: ( oCategories, oOtherCategories ) => {
        const categories = oCategories.length > 0 ? ItemsHelper.formatExactPathCategory(oCategories) : ItemsHelper.formatAltPathCategory(oOtherCategories);
        return {categories}
        
    },
    formatExactPathCategory: ( oCategories ) => {
        const category = ( oCategories.filter( ({ id }) =>  id = "category" ) ) [0]
        const exactCategoryPath = category.values[0].path_from_root.map(p => p.name)
        return exactCategoryPath;
        
    },
    formatAltPathCategory: ( oCategories ) => {
        console.log(oCategories)
        const category = oCategories.reduce((prev, current) => (prev.results > current.results) ? prev : current); 
        const { name } = category
        return name;
        
    },
    getCategoryResultsCounter: ( oCategories ) => oCategories.filter( ({ results }) =>  results ),
    formatPriceResponse: ( item ) => {
        const { price:amount, currency_id:currency } = item;
        const decimals = ItemsHelper.formatPriceDecimalNumber(amount);
        return { amount,currency,decimals }
    },
    formatPriceDecimalNumber: ( price ) => {
        return Number( ( ( price - Math.floor(price) ) * 100 ).toFixed(0) );
    },
    
} 

module.exports = ItemsHelper
*/