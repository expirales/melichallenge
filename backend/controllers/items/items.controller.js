import Items from './items.service';
import ItemDetail from './items.detail.service';

module.exports.IController = {
    index: (req, res) => {
        try {
            res.render('index',{title:'Api de Mercado libre'})
        }
        catch (e) {
            res.status(404).send('Algo salio mal')
        }
    },
    items: async (req, res) => {
        try {
            const itemsService = new Items();
            const items = await itemsService.getItems(req.query.q);
            res.status(200).send(items)
        }
        catch (e) {
            console.log(e)
            res.status(404).send({ error: 'Error', message: 'Algo salio mal..', error_message: e.toString() })
        }
    },
    itemDescription: async (req, res) => {
        try {
            const itemDetailService = new ItemDetail(req.params.id);
            const item = await itemDetailService.getItemById();
            res.status(200).send(item)
        }
        catch (e) {
            console.log(e)
            res.status(404).send({ error: 'Error', message: 'Algo salio mal..', error_message: e.toString() })
        }
    }
}