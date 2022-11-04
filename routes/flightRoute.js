const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

 router.get('/', controller.example)
 router.post('/', controller.createNewFlight)
 router.get('/:id', controller.getSingleRoute)
 router.patch('/', controller.updateSingleRoute)
 router.delete('/:id', controller.deleteSingleRoute)
 


module.exports = router;

