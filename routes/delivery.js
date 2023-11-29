const express = require('express');
const router = express.Router();


const {
    deliverySignup,
    deliveryLogin,
    deliveryLogout,
    getDeliveryProfile,
    updateDeliveryProfile
} = require('../controllers/deliveryController')







router.post('delivery/signup', deliverySignup)

router.post('delivery/login',  deliveryLogin)

router.get('delivery/logout', deliveryLogout);


router.get('delivery/profile', getDeliveryProfile)
router.patch('delivery/profile', updateDeliveryProfile)