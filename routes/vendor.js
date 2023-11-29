const express = require('express');
const router = express.Router();


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


router.post('register', vendorSignup);

router.post('login', vendorLogin);

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


