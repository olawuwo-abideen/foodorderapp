const express = require('express');
const router = express.Router();


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





router.post('/register', customerSignup)

router.post('/login', customerLogin)

router.get('/logout', customerLogout);

router.patch('/updatepassword', updateCustomerPassword)

router.get('/profile', getCustomerProfile)
router.patch('/profile', updateCustomerProfile)

router.post('/order/delivery', assignOrderForDelivery)

router.get('/verify/transaction', validateTransaction);


router.post('/create-order', createOrder);
router.get('/orders', getAllOrders);
router.get('/order/:id', getSingleOrder)