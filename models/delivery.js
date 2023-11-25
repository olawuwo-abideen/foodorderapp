const mongoose = require('mongoose');
const validator = require('validator');

const deliverySchema = new mongoose.Schema(
    {
        email: {
          type: String,
          required: true,
          unique : true,
          match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
          ],
        },
        password: {
          type: String,
          required: true,
          minlength: 6
        },
        firstName: {
          type: Number,
          required: true,
          maxlength: 20
        },
        lastName: {
            type: String,
            required: true,
            maxlength: 20,
          },
        address: {
            type: String,
            required: true,
            maxlength: 50,
          },
        phoneNumber: {
            type: Number,
            required: true,
            maxlength: 11,
          },
        isAvailable: {
            type: Boolean,
            required: true,
          },
        verified: {
            type: Boolean,
            required: true,
          },
        timestamps: true
      },
)





module.exports = mongoose.model('delivery', deliverySchema);