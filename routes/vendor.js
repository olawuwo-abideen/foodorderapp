const express = require('express');
const router = express.Router();


const {
    vendorLogin,
    getVendorProfile,
    updateVendorProfile,
    updateVendorService,
    addSingleFood,
    getAllFoods,
    getCurrentOrder,
    getOrderDetails,
    processOrder,
    getAllOffers,
    addSingleOffer,
    editSingleOffer,
} = require('../controllers/vendorController')



router.get('/login', vendorLogin);

router.get('/profile', getVendorProfile);
router.patch('/profile', updateVendorProfile);
router.patch('/service', updateVendorService);

router.post('/food', addSingleFood);
router.get('/food', getAllFoods)


router.get('/orders', getCurrentOrder);
router.put('/order/:id/process', processOrder);
router.get('/order/:id', getOrderDetails)
 

//Offers
router.get('/offers', getAllOffers);
router.post('/offer', addSingleOffer);
router.put('/offer/:id', editSingleOffer)


