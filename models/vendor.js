const mongoose = require('mongoose');
const validator = require('validator');

const vendorSchema = new mongoose.Schema(
    {
        name: {
          type: String,
          required: true,
          maxlength: 50,
        },
        ownerName: {
          type: String,
          required: true,
          maxlength: 50,
        },
        foodType: {
          type: String,
          required: true,
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
            unique: true,
          },
        email: {
            type: String,
            required: true,
            maxlength: 100,
            unique: true,
            validate: {
              validator: validator.isEmail,
              message: 'Please provide valid email',
            },
          },
        password: {
            type: String,
            required: true,
            minlength: [6, 'Password must be at least 6 characters long']
          },
        serviceAvailable: {
            type: Boolean,
            required: true,
          },
        rating: {
            type: Number,
            required: true,
          },
        foods: [{
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'food'
        }],
        timestamps: true
      },
)





module.exports = mongoose.model('vendor', vendorSchema);