module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3f53bf8409f067cb49b7fa15c95da3f1'),
  },
});
