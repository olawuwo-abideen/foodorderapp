const Offer = require('../models/offer')
const Vendor = require('../models/vendor')
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');


 
const  getAvailableFood = async (req, res) => {
   
    const food = await Vendor.find({serviceAvailable: true}).sort([['rating', 'descending']]).populate('foods')

    if(food.length > 0){
         return res.status(StatusCodes.OK).json({food})
    }
    return res.status(StatusCodes.NOT_FOUND).json({ msg: 'No Food is  available at the moment!'});
};


const  getTopRestaurants = async (req, res) => {
    
    const toprestaurant = await Vendor.find({ serviceAvailable: true}).sort([['rating', 'descending']]).limit(10)

    if(toprestaurant.length > 0){
        return res.status(StatusCodes.OK).json({toprestaurant})
    }
    
    return res.status(StatusCodes.NOT_FOUND).json({ msg: 'no data at the moment!'});

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