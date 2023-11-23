const express = require('express');
const router = express.Router();


const {
    registerDelivery,
    loginDelivery,
    getDeliveryProfile,
    updateDeliveryProfile,
    updateDeliveryStatus
} = require('../controllers/deliveryController')







router.post('/signup', registerDelivery)

router.post('/login',  loginDelivery)

router.put('/change-status', updateDeliveryStatus);

router.get('/profile', getDeliveryProfile)
router.patch('/profile', updateDeliveryProfile)