const mongoose = require('mongoose');


const offerSchema = new mongoose.Schema(
    {
        offerType: {
          type: String,
          required: true,
       
        },
        vendors: [
          {type: mongoose.Schema.ObjectId, ref: 'vendor'}
      ],
        
        title: {
          type: String,
          required: true,
        },
        description: {
            type: String,
            required: true,
          
          },
        minValue: {
            type: Number,
            required: true,
          },
          offerAmount: {
            type: Number,
            required: true,
          },
        isActive: {
            type: Boolean,
            required: true,
          },
        timestamps: true
      },
)





module.exports = mongoose.model('offer', offerSchema);

