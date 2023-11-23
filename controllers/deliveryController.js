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
    
};


const  loginDelivery = async (req, res) => {
    
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