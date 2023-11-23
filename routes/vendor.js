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




