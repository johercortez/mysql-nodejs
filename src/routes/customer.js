const express = require('express');
const router = express.Router();

const customerController = require('../controller/customerController')

router
    .get('/', customerController.list)
    .post('/add', customerController.save)
    .get('/delete/:id',customerController.delete)
    .get('/update/:id',customerController.edit)
    .post('/update/:id',customerController.update)
    module.exports = router;