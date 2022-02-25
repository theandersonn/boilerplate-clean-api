export default {
  mongoUrl:
    process.env.MONGO_URL || 'mongodb://localhost:27017/api-boilerplate',
  port: process.env.MONGO_PORT || 5050,
};
