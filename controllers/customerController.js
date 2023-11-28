const Customer = require('../models/customer')
const Delivery = require('../models/delivery')
const Food = require('../models/food')
const Vendor = require('../models/vendor')
const Offer = require('../models/offer')
const Order = require('../models/order')
const Transaction = require('../models/transaction')
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const { attachCookiesToResponse, createCustomerToken } = require('../utils');


const register = async (req, res) => {

  const { fullName, email, password } = req.body;

  const emailAlreadyExists = await Vendor.findOne({ email });
  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError('Email already exists');
  }

  const vendor = await Vendor.create({ email, password, fullName, address, phoneNumber, latitude, longitude, verified });
  const tokenVendor = createCustomerToken(vendor);
  attachCookiesToResponse({ res, vendor: tokenVendor });
  res.status(StatusCodes.CREATED).json({ vendor: tokenVendor });
    
};


const  login = async (req, res) => {

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

const updateCustomerPassword = async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    if (!oldPassword || !newPassword) {
      throw new CustomError.BadRequestError('Please provide both values');
    }
    const customer = await Customer.findOne({ _id: req.user.userId });
  
    const isPasswordCorrect = await customer.comparePassword(oldPassword);
    if (!isPasswordCorrect) {
      throw new CustomError.UnauthenticatedError('Invalid Credentials');
    }
    customer.password = newPassword;
  
    await customer.save();
    res.status(StatusCodes.OK).json({ msg: 'Success! Password Updated.' });
  };
  



const logout = async (req, res) => {
    res.cookie('tokenCustomer', 'logout', {
      httpOnly: true,
      expires: new Date(Date.now() + 1000),
    });
    res.status(StatusCodes.OK).json({ msg: 'user logged out!' });
  };

  

const getCustomerProfile = async (req, res) => {

    const customer = req.user;
 
    if(customer){
        
        const profile =  await Customer.findById(customer._id);
        
        if(profile){
             
            return res.status(StatusCodes.CREATED).json(profile);
        }

    }
    return res.status(StatusCodes.BAD_REQUEST).json({ msg: 'Error while Fetching Profile'});

    
};


const  updateCustomerProfile = async (req, res) => {

  
};




const  assignOrderForDelivery = async (req, res) => {
  
};

const validateTransaction = async (req, res) => {
    
};

const  createOrder = async (req, res) => {
  
};


const getSingleOrder = async (req, res) => {
    const { id: orderId } = req.params;

  const order = await Order.findOne({ _id: orderId })

  if (!order) {
    throw new CustomError.NotFoundError(`No product with id : ${orderId}`);
  }

  res.status(StatusCodes.OK).json({order});
};


const  getAllOrders = async (req, res) => {
  
};




const  addToCart = async (req, res) => {
  
};




const getCart = async (req, res) => {
  
};


const  deleteCart = async (req, res) => {
  
};




const  verifyOffer = async (req, res) => {
  
};




const  createPayment = async (req, res) => {
  
};





module.exports = {
    register,
    login ,
    logout,
    updateCustomerPassword,
    getCustomerProfile,
    updateCustomerProfile,
    assignOrderForDelivery,
    validateTransaction,
    createOrder,
    getSingleOrder,
    getAllOrders,
    addToCart,
    getCart,
    deleteCart,
    verifyOffer,
    createPayment
}