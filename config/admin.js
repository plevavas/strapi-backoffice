module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4713cc3da9d98c205a64567b8edf8258'),
  },
});
