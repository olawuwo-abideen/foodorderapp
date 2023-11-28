const Delivery = require('../models/delivery')
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const { attachCookiesToResponse, createDeliveryToken } = require('../utils');

 
const  registerDelivery = async (req, res) => {

const  { name, email, password } = req.body;

const emailAlreadyExists = await Delivery.findOne({ email });
  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError('Email already exists');
  }

  const delivery = await Delivery.create({ email, password, name, address, phoneNumber, isAvailable, verified, latitude, longitude });
  const tokenDelivery = createDeliveryToken(delivery);
  attachCookiesToResponse({ res, delivery: tokenDelivery });
  res.status(StatusCodes.CREATED).json({ delivery: tokenDelivery });

};


const  loginDelivery = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new CustomError.BadRequestError('Please provide email and password');
    }
    const delivery = await Delivery.findOne({ email });
  
    if (!delivery) {
      throw new CustomError.UnauthenticatedError('Invalid Credentials');
    }
    const isPasswordCorrect = await delivery.comparePassword(password);
    if (!isPasswordCorrect) {
      throw new CustomError.UnauthenticatedError('Invalid Credentials');
    }
    const tokenDelivery = createDeliveryToken(delivery);
    attachCookiesToResponse({ res, delivery: tokenDelivery });
  
    res.status(StatusCodes.OK).json({ delivery: tokenDelivery });
};


const logout = (req, res) => {
    try {
      res.cookie('tokenDelivery', 'logout', {
        httpOnly: true,
        expires: new Date(0),
      });
      res.status(StatusCodes.OK).json({ message: 'User logged out successfully' });
    } catch (error) {
      console.error('Error in logout:', error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
  };
  
const  getDeliveryProfile = async (req, res) => {
  const {id: deliveryId} = req.params;

  const delivery = await Delivery.findOne({_id: deliveryId})

  if (!delivery) {
    throw new CustomError.NotFoundError(`No delivery with id : ${deliveryId}`);
  }

  res.status(StatusCodes.OK).json({delivery});
    
};



const  updateDeliveryProfile = async (req, res) => {

  const { id: deliveryId } = req.params;

  const delivery = await Delivery.findOneAndUpdate({ _id: deliveryId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!delivery) {
    throw new CustomError.NotFoundError(`No product with id : ${deliveryId}`);
  }

  res.status(StatusCodes.OK).json({delivery});
    
};




module.exports = {
    registerDelivery,
    loginDelivery,
    logout,
    getDeliveryProfile,
    updateDeliveryProfile
}