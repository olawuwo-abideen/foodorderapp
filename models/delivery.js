const mongoose = require('mongoose');


const deliverySchema = new mongoose.Schema(
    {
        email: {
          type: String,
          required: true,
          maxlength: 50,
        },
        password: {
          type: String,
          required: true,
          minlength: 6,
        },
        firstName: {
          type: Number,
          required: true,
          maxlength: 30,
          unique: true,
        },
        lastName: {
            type: String,
            required: true,
            maxlength: 50,
          },
        address: {
            type: String,
            required: true,
            maxlength: 50,
          },
        phoneNumber: {
            type: Number,
            required: true,
            maxlength: 100,
          },
        isAvailable: {
            type: Boolean,
            required: true,
          },
      },
)





module.exports = mongoose.model('delivery', deliverySchema);