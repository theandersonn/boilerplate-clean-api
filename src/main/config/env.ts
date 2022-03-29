export default {
  mongoUrl:
    process.env.MONGO_URI || 'mongodb://localhost:27017/api-boilerplate',
  port: process.env.PORT || 5050,
  domain: process.env.DOMAIN || 'http://localhost',
};
