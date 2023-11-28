const express = require('express');
const router = express.Router();


const {
    registerVendor,
    getSingleVendor,
    getAllVendors,
    getAllTransactions,
    getSingleTransaction,
    verifyDeliveryUser,
    getDeliveryUsers 

    } = require('../controllers/admin');



router.post('/vendor', registerVendor)

router.get('/vendors', getAllVendors)
router.get('/vendor/:id', getSingleVendor)


router.get('/transactions', getAllTransactions)
router.get('/transaction/:id', getSingleTransaction)

router.put('/delivery/verify', verifyDeliveryUser)
router.get('/delivery/users', getDeliveryUsers)