# FoodOrdering

The food ordering app is designed to offer a seamless  experience for both vendor and customers. With a focus on efficient design, robust product management, and secure transactions, the app enables vendor to showcase their foods to customers. Key features include a secure user authentication system, comprehensive product management tools, a convenient shopping cart, and a streamlined order processing system. The app integrates a secure payment gateway to facilitate online transactions, supports customer rating for informed decision-making, and incorporates search and filtering options for a personalized shopping experience. Additionally, the app prioritizes security, scalability, and legal compliance, while analytics tools provide valuable insights. With thorough testing, documentation, and ongoing customer support integration, the food ordering app aims to enhance the overall online food shopping experience.

## Features

- **Admin**: Admin can register vendor, view all transaction, and register and verify delivery.

- **Customer**: User can update, get, and create Order.

- **Vendor**: Admin can update, get, and create Product.

- **Delivery**: User can update, get, and create Reviews.

## Built With:

- JavaScript
- Node
- Express
- dotenv
- mongoose
- nodemon
- cors
- bcryptjs
- express-async-error
- helmet
- jsonwebtoken
- http-status-code
- cookie-parser
- express-rate-limit
- validator

## Installation

- clone the repository

```sh
git clone git@github.com:olawuwo-abideen/foodorderapp.git
```

- navigate to the folder

```sh
cd foodorderapp.git
```

## Run the app in development mode

Open a terminal window session, or the equivalent on your machine, and enter the following command to install all the
Node modules needed to run the app:

```sh
npm install
```

After doing an `npm install` enter the following `npm start` command:

```sh

npm start

```

Set up the environment variables:

Create the .env file and setup the MongoDB URL.

The server will start running on the specified port (default: 3000) and establish a connection to the MongoDB database.

This will start the app and set it up to listen for incoming connections on port 3000. Open up your browser of choice
and go to the url

```sh

http://localhost:3000

```

to start using the app.

## API Endpoints

The following API endpoints are available:

BaseUrl https://localhost:3000/

- `GET /api/v1/admin/vendors` - Get all Vendors
- `GET /api/v1/admin/vendors/:id` - Get a Vendors
- `GET /api/v1/admin/vendors/transactions` - Get all Transactions
- `GET /api/v1/admin/vendors/transaction/:id` - Get a Transaction
- `GET /api/v1/admin/verify` - Verify Delivery User
- `GET /api/v1/admin/delivery/users` - Get a Delivery User

* `POST /api/v1/customer/register` - Customer Signup
* `POST /api/v1/customer/login` - Customer login
* `GET /api/v1/customer/logout` - Customer logout
* `PATCH /api/v1/customer/updatepassword` - Update Customer Password
* `GET /api/v1/customer/profile` - Get Customer Profile
* `PATCH /api/v1/customer/profile` - Update Customer Profile
* `POST /api/v1/customer/order/delivery` - Assign order for delivery
* `GET /api/v1/customer/verify/transaction` - Validate transaction
* `POST /api/v1/customer/create-order` - Create order
* `GET /api/v1/customer/orders` - Get all order
* `GET /api/v1/customer/order/:id` - Get single order

- `POST /api/v1/delivery/signup` - Register a delivery user
- `POST /api/v1/delivery/login` - Login delivery user
- `GET /api/v1/delivery/logout` - Logout delivery user
- `GET /api/v1/delivery/profile` - Get delivery profile
- `PATCH /api/v1/delivery/profile` - Update delivery profile

* `GET /api/v1/shopping/availablefood` - Get all available food
* `GET /api/v1/shopping/top-restaurant` - Get top restaurant
* `GET /api/v1/shopping/foodoffers` - Get available offer
* `GET /api/v1/shopping/restaurant/:id` - Get a restaurant

- `POST /api/v1/vendor/register` - Register a vendor
- `POST /api/v1/vendor/login` - Login a vendor
- `GET /api/v1/vendor/logout` - Logout a vendor
- `PATCH /api/v1/vendor/password` - Update vendor password
- `PATCH /api/v1/vendor/profile` - Update vendor profile
- `POST /api/v1/vendor/food` - Create food
- `GET /api/v1/vendor/foods` - Get all foods
- `GET /api/v1/vendor/orders` - Get all order
- `GET /api/v1/vendor/order/:id` - Get an order
- `GET /api/v1/vendor/offers` - Get all offer
- `POST /api/v1/vendor/offer` - Create an Offer
- `PUT /api/v1/vendor/offer/:id` - Get an offer
- `PATCH /api/v1/vendor/offer` - Update an offer

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/olawuwo-abideen/foodorderapp/issues).

## Authors

👤 **Olawuwo Abideen**

- GitHub: [@Olawuwo Abideen](https://github.com/olawuwo-abideen)
- Twitter: [@Olawuwo Abideen](https://twitter.com/olawuwo_abideen)
- LinkedIn: [@Olawuwo Abideen](https://www.linkedin.com/in/olawuwo-abideen/)
