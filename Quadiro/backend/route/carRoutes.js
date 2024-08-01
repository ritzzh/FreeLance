const express = require('express');
const { getCarStats,addCar, getCars, deleteCar, updateCar } = require('../controllers/carController');

const router = express.Router();

router.post('/addcar', addCar);
router.get('/showcars', getCars);
router.delete('/deletecar/:id', deleteCar);
router.put('/updatecar/:id', updateCar);
router.get('/stats', getCarStats);

module.exports = router;
