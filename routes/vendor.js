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


router.post('vendor/register', vendorSignup);

router.post('vendor/login', vendorLogin);

router.get('vendor/logout', vendorLogout);

router.patch('vendor/password', updateVendorPassword);


router.patch('vendor/profile', updateVendorProfile);


router.post('vendor/food', addFood);
router.get('vendor/foods', getAllFoods)


router.get('vendor/orders', getAllOrder);
router.get('vendor/order/:id', getSingleOrder)
 

//Offers
router.get('vendor/offers', getAllOffers);
router.post('vendor/offer', addOffer);
router.put('vendor/offer/:id', getSingleOffer)
router.patch('vendoroffer/', editSingleOffer);


