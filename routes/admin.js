const express = require('express');
const router = express.Router();


const {
    
    createVendor,
    getSingleVendor,
    getAllVendors,
    getAllTransactions,
    getSingleTransaction,
    verifyDeliveryUser,
    getDeliveryUsers 

    } = require('../controllers/admin');



router.post('/vendor', createVendor)

router.get('/vendors', getAllVendors)
router.get('/vendor/:id', getSingleVendor)


router.get('/transactions', getAllTransactions)
router.get('/transaction/:id', getSingleTransaction)

router.put('/delivery/verify', verifyDeliveryUser)
router.get('/delivery/users', getDeliveryUsers)