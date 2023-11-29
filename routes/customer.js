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





router.post('customer/register', customerSignup)

router.post('customer/login', customerLogin)

router.get('customer/logout', customerLogout);

router.patch('customer/updatepassword', updateCustomerPassword)

router.get('customer/profile', getCustomerProfile)
router.patch('customer/profile', updateCustomerProfile)

router.post('customer/order/delivery', assignOrderForDelivery)

router.get('customer/verify/transaction', validateTransaction);


router.post('customer/create-order', createOrder);
router.get('customer/orders', getAllOrders);
router.get('customer/order/:id', getSingleOrder)