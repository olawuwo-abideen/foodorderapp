const mongoose = require('mongoose');


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
          type: Number,
          required: true,
        },
        address: {
            type: String,
            required: true,
            maxlength: 50,
          },
        phone: {
            type: String,
            required: true,
            maxlength: 11,
            unique: true,
          },
        email: {
            type: Number,
            required: true,
            maxlength: 100,
            unique: true,
            match: [
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              'Please provide a valid email',
            ],
          },
        password: {
            type: Number,
            required: true,
            minlength: 6,
          },
        serviceAvailable: {
            type: Number,
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