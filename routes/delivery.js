const express = require('express');
const router = express.Router();


const {
    deliverySignup,
    deliveryLogin,
    deliveryLogout,
    getDeliveryProfile,
    updateDeliveryProfile
} = require('../controllers/deliveryController')







router.post('signup', deliverySignup)

router.post('login',  deliveryLogin)

router.get('logout', deliveryLogout);


router.get('profile', getDeliveryProfile)
router.patch('profile', updateDeliveryProfile)