module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4c96b35486073055104223ab582b26d7'),
  },
});
