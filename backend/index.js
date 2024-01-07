require('dotenv').config();
const express = require('express');
const server = express();
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const crypto = require('crypto');
const cookieParser = require('cookie-parser');
const { createProduct } = require('./controller/Product');
const productsRouter = require('./routes/Products');
const categoriesRouter = require('./routes/Categories');
const brandsRouter = require('./routes/Brands');
const usersRouter = require('./routes/Users');
const authRouter = require('./routes/Auth');
const cartRouter = require('./routes/Cart');
const ordersRouter = require('./routes/Order');
const { User } = require('./model/User');
const path = require('path');
const { Order } = require('./model/Order');

server.post(
  '/webhook',
  express.raw({ type: 'application/json' }),
  async (request, response) => {
    // Your webhook handling code remains unchanged
    response.send();
  }
);

// Middlewares
server.use(express.static(path.resolve(__dirname, 'build')));
server.use(cookieParser());
server.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
  })
);
server.use(
  cors({
    exposedHeaders: ['X-Total-Count'],
  })
);
server.use(express.json());

// Routes
server.use('/products', productsRouter.router);
server.use('/categories', categoriesRouter.router);
server.use('/brands', brandsRouter.router);
server.use('/users', usersRouter.router);
server.use('/auth', authRouter.router);
server.use('/cart', cartRouter.router);
server.use('/orders', ordersRouter.router);

server.get('*', (req, res) =>
  res.sendFile(path.resolve('build', 'index.html'))
);

// Passport Strategies
passport.use(
  'local',
  new LocalStrategy({ usernameField: 'email' }, async function (
    email,
    password,
    done
  ) {
    // Your local strategy code remains unchanged
  })
);

// ... Additional passport configurations if needed

// MongoDB Connection
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Database connected');
  } catch (error) {
    console.error('Database connection error:', error.message);
  }
}

// Start server
async function startServer() {
  await connectToDatabase();
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}

startServer();
