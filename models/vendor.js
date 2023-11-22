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
          maxlength: 30,
          unique: true,
        },
        address: {
            type: String,
            required: true,
            maxlength: 50,
          },
        phone: {
            type: String,
            required: true,
            maxlength: 50,
          },
        email: {
            type: Number,
            required: true,
            maxlength: 100,
          },
        password: {
            type: Number,
            required: true,
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
      },
)





module.exports = mongoose.model('vendor', vendorSchema);