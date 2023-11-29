const express = require('express');
const router = express.Router();
const rateLimiter = require('express-rate-limit');

const {
    customerSignup,
    customerLogin ,
    customerLogout,
    updateCustomerPassword,
    getCustomerProfile,
    updateCustomerProfile,
    assignOrderForDelivery,
    validateTransaction,
    createOrder,
    getSingleOrder,
    getAllOrders,
} = require ('../controllers/customerController')


const apiLimiter = rateLimiter({
    windowMs: 10 * 60 * 1000,
    max: 10,
    message: {
      msg: 'Too many requests from this IP, please try again after 10 minutes',
    },
  });


router.post('register', apiLimiter, customerSignup)

router.post('login', apiLimiter, customerLogin)

router.get('logout', customerLogout);

router.patch('updatepassword', updateCustomerPassword)

router.get('profile', getCustomerProfile)
router.patch('profile', updateCustomerProfile)

router.post('order/delivery', assignOrderForDelivery)

router.get('verify/transaction', validateTransaction);


router.post('create-order', createOrder);
router.get('orders', getAllOrders);
router.get('order/:id', getSingleOrder)