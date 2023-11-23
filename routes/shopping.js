const express = require('express');
const router = express.Router();


const {
    getAvailableFood,
    getTopRestaurants,
    searchFoods, 
    getSingleRestaurant,
    getAvailableOffers
} = require('../controllers/shoppingController')




router.get('/availablefood', getAvailableFood )

router.get('/top-restaurant/', getTopRestaurants)


router.get('/foodsearch/', searchFoods)

router.get('/foodoffers/:pincode', getAvailableOffers)

router.get('/restaurant/:id', getSingleRestaurant)