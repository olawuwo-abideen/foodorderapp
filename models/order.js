const mongoose = require('mongoose');


const foodSchema = new mongoose.Schema(
    {
        orderId: {
          type: String,
          required: true,
          maxlength: 50,
        },
        vendorId: {
          type: String,
          required: true,
          maxlength: 50,
        },
        description: {
          type: Number,
          required: true,
          maxlength: 30,
          unique: true,
        },
        category: {
            type: String,
            required: true,
            maxlength: 50,
          },
        foodType: {
            type: String,
            required: true,
            maxlength: 50,
          },
        readyTime: {
            type: Number,
            required: true,
          },
        price: {
            type: Number,
            required: true,
          },
        rating: {
            type: Number,
            required: true,
          },
      },
)





module.exports = mongoose.model('food', foodSchema);