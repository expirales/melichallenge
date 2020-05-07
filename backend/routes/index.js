import express from 'express';
import { IController } from '../controllers/items/items.controller'

let router = express.Router();

router
  .get('/', IController.index)
  .get('/items', IController.items)
  .get('/items/:id', IController.itemDescription)

module.exports = router;
