const Customer = require('../models/customer')
const Delivery = require('../models/delivery')
const Food = require('../models/food')
const Vendor = require('../models/vendor')
const Offer = require('../models/offer')
const Order = require('../models/order')
const Transaction = require('../models/transaction')
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');




const register = async (req, res) => {
    
};

const  login = async (req, res) => {
  
};


const getCustomerProfile = async (req, res) => {
  
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