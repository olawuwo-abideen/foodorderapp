const Offer = require('../models/offer')
const Vendor = require('../models/vendor')


const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');


 
const  getAvailableFood = async (req, res) => {
    
};


const  getTopRestaurants = async (req, res) => {
    
};

const  searchFoods = async (req, res) => {
    
};



const  getSingleRestaurant = async (req, res) => {
    
};


const  getAvailableOffers = async (req, res) => {
    
};


module.exports= {
    getAvailableFood,
    getTopRestaurants,
    searchFoods, 
    getSingleRestaurant,
    getAvailableOffers
}