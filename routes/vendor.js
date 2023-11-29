const express = require('express');
const router = express.Router();
const rateLimiter = require('express-rate-limit');

const {
    vendorSignup,
    vendorLogin,
    vendorLogout,
    updateVendorPassword,
    updateVendorProfile,
    addFood,
    getAllFoods,
    getAllOrder,
    getSingleOrder,
    getAllOffers,
    getSingleOffer,
    addOffer,
    editSingleOffer
} = require('../controllers/vendorController')

const apiLimiter = rateLimiter({
    windowMs: 10 * 60 * 1000,
    max: 10,
    message: {
      msg: 'Too many requests from this IP, please try again after 10 minutes',
    },
  });


router.post('register', apiLimiter, vendorSignup);

router.post('login', apiLimiter, vendorLogin);

router.get('logout', vendorLogout);

router.patch('password', updateVendorPassword);


router.patch('profile', updateVendorProfile);


router.post('food', addFood);
router.get('foods', getAllFoods)


router.get('orders', getAllOrder);
router.get('order/:id', getSingleOrder)
 

//Offers
router.get('offers', getAllOffers);
router.post('offer', addOffer);
router.put('offer/:id', getSingleOffer)
router.patch('offer', editSingleOffer);


