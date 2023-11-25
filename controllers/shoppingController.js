const Offer = require('../models/offer')
const Vendor = require('../models/vendor')
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const  getAvailableFood = async (req, res) => {
   
    const food = await Vendor.find({serviceAvailable: true}).sort([['rating', 'descending']]).populate('foods')

    if(food.length > 0){
         return res.status(StatusCodes.OK).json({food})
    }
    return res.status(StatusCodes.NOT_FOUND).json({ msg: 'No Food is available at the moment!'});
};

const  getTopRestaurants = async (req, res) => {
    
    const toprestaurant = await Vendor.find({ serviceAvailable: true}).sort([['rating', 'descending']]).limit(10)

    if(toprestaurant.length > 0){
        return res.status(StatusCodes.OK).json({toprestaurant})
    }
    
    return res.status(StatusCodes.NOT_FOUND).json({ msg: 'no data at the moment!'});

};


const  getSingleRestaurant = async (req, res) => {

    const {id:vendorId} = req.params
    const vendor = await Vendor.findOne({_id:vendorId}).populate('foods')
    if(!vendor){
        throw new CustomError.NotFoundError(`No vendor with id : ${vendorId}`);
      }
  res.status(StatusCodes.OK).json({vendor}) 

    
};


const  getAvailableOffers = async (req, res) => {
    const offers = await Offer.find({isActive: true});

    if(offers){
        return res.status(StatusCodes.OK).json(offers);
    }
    
    return res.status(StatusCodes.NOT_FOUND).json({ msg: 'no offer at the moment!'});

};


module.exports= {
    getAvailableFood,
    getTopRestaurants,
    getSingleRestaurant,
    getAvailableOffers
}