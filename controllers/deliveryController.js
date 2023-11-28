const Customer = require('../models/customer')
const Delivery = require('../models/delivery')
const Food = require('../models/food')
const Vendor = require('../models/vendor')
const Offer = require('../models/offer')
const Order = require('../models/order')
const Transaction = require('../models/transaction')
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

 
const  registerDelivery = async (req, res) => {

    const { email, phoneNumber, password } = req.body;

  const emailAlreadyExists = await Vendor.findOne({ email });
  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError('Email already exists');
  }

  const vendor = await Vendor.create({ name, email, password, foodType, address, phoneNumber, serviceAvailable, rating, verified });
  const tokenVendor = createVendorToken(vendor);
  attachCookiesToResponse({ res, vendor: tokenVendor });
  res.status(StatusCodes.CREATED).json({ vendor: tokenVendor });
    
};


const  loginDelivery = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new CustomError.BadRequestError('Please provide email and password');
    }
    const customer = await Customer.findOne({ email });
  
    if (!customer) {
      throw new CustomError.UnauthenticatedError('Invalid Credentials');
    }
    const isPasswordCorrect = await customer.comparePassword(password);
    if (!isPasswordCorrect) {
      throw new CustomError.UnauthenticatedError('Invalid Credentials');
    }
    const tokenCustomer = createCustomerToken(user);
    attachCookiesToResponse({ res, customer: tokenCustomer });
  
    res.status(StatusCodes.OK).json({ customer: tokenCustomer });
};


const logout = (req, res) => {
    try {
      res.cookie('tokenUser', 'logout', {
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
    
};



const  updateDeliveryProfile = async (req, res) => {
    
};


const  updateDeliveryStatus = async (req, res) => {
    
};



module.exports = {
    registerDelivery,
    loginDelivery,
    getDeliveryProfile,
    updateDeliveryProfile,
    updateDeliveryStatus
}