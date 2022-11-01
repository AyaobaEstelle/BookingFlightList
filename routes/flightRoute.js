const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

// router.get
// router.post
// router.put
// router.patch
// router.delete

// C -Create
// R-Read
// U-Update
// D-Delete


router.get('/', controller.example)

router.get('/route', controller.route)

module.exports = router;

