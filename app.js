require('express-async-errors');
require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
const helmet = require('helmet');



// middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');


//Database
const connectDB = require('./database/connect');
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(cookieParser(process.env.JWT_SECRET));

app.get('/', (req, res) => {
    res.send('<h1>Welcome to God Plan Food </h1>');
  });

  



  const adminRouter = require('./routes/admin');
  const customerRouter = require('./routes/customer');
  const deliveryRouter = require('./routes/delivery');
  const shoppingRouter = require('./routes/shopping');
  const vendorRouter = require('./routes/vendor');
  

  app.use(notFoundMiddleware);
  app.use(errorHandlerMiddleware);



  app.use('/api/v1/admin', adminRouter);
  app.use('/api/v1/customer', customerRouter);
  app.use('/api/v1/delivery', deliveryRouter);
  app.use('/api/v1/shopping', shoppingRouter);
  app.use('/api/v1/vendor', vendorRouter);


const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();