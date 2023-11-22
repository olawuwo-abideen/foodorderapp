const mongoose = require('mongoose');


const transactionSchema = new mongoose.Schema(
    {

        customer: {
          type: String,
          required: true,
          maxlength: 50,
        },
        vendorId: {
          type: String,
          required: true,
          maxlength: 50,
        },
        orderId: {
          type: String,
          required: true,
        },
        orderValue: {
            type: Number,
            required: true,
          },
        offerUsed: {
            type: String,
            required: true,
          },
        status: {
            type: String,
            required: true,
          },
        paymentMode: {
            type: String,
            required: true,
          },
        paymentResponse: {
            type: String,
            required: true,
          },
          timestamps: true
      },
)





module.exports = mongoose.model('transaction', transactionSchema);