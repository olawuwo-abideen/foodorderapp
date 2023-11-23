const express = require('express');
const router = express.Router();


const {
    register,
    login ,
    getCustomerProfile,
    updateCustomerProfile,
    createOrder,
    getSingleOrder,
    getAllOrders,
    addToCart,
    getCart,
    deleteCart,
    verifyOffer,
    createPayment
} = require ('../controllers/customerController')





router.post('/register', register)

router.post('/login', login)

router.get('/profile', getCustomerProfile)
router.patch('/profile', updateCustomerProfile)

router.post('/cart', addToCart)
router.get('/cart', getCart)
router.delete('/cart', deleteCart)

router.get('/offer/verify/:id', verifyOffer);

router.post('/create-payment', createPayment);

router.post('/create-order', createOrder);
router.get('/orders', getAllOrders);
router.get('/order/:id', getSingleOrder)