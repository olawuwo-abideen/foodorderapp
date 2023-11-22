const mongoose = require('mongoose');


const customerSchema = new mongoose.Schema(
    {
        email: {
          type: String,
          required: true,
          maxlength: 50,
        },
        password: {
          type: String,
          required: true,
          maxlength: 50,
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
        
      },
)





module.exports = mongoose.model('customer', customerSchema);