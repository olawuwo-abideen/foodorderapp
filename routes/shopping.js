const express = require('express');
const router = express.Router();


const {
    getAvailableFood,
    getTopRestaurants,
    getSingleRestaurant,
    getAvailableOffers
} = require('../controllers/shoppingController')




router.get('availablefood', getAvailableFood )

router.get('top-restaurant/', getTopRestaurants)


router.get('foodoffers/', getAvailableOffers)

router.get('restaurant/:id', getSingleRestaurant)