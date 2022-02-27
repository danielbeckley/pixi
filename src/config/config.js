const dotenv = require('dotenv');
dotenv.config()

module.exports = {
  port: process.env.PORT,
  mongoose: {
    uri: process.env.MONGODB_URI,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};
