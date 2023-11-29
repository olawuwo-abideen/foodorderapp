const express = require('express');
const router = express.Router();
const rateLimiter = require('express-rate-limit');

const {
    deliverySignup,
    deliveryLogin,
    deliveryLogout,
    getDeliveryProfile,
    updateDeliveryProfile
} = require('../controllers/deliveryController')


const apiLimiter = rateLimiter({
    windowMs: 10 * 60 * 1000,
    max: 10,
    message: {
      msg: 'Too many requests from this IP, please try again after 10 minutes',
    },
  });




router.post('signup', apiLimiter, deliverySignup)

router.post('login',  apiLimiter, deliveryLogin)

router.get('logout', deliveryLogout);


router.get('profile', getDeliveryProfile)
router.patch('profile', updateDeliveryProfile)