const express = require('express');
const router = express.Router();


const { createVendor, getDeliveryUsers, getTransactionById, getTransactions, getVendorByID, getVendors, verifyDeliveryUser } = require('../controllers/admin');





router.post('/vendor', createVendor)

router.get('/vendors', getVendors)
router.get('/vendor/:id', getVendorByID)


router.get('/transactions', getTransactions)
router.get('/transaction/:id', getTransactionById)

router.put('/delivery/verify', verifyDeliveryUser)
router.get('/delivery/users', getDeliveryUsers);