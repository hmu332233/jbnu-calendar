const service = require('../services');
const Users = require('../models/users');

exports.checkView = () => async (req, res, next) => {
  const token = req.cookies['x-access-token'] || req.query.token;
  const { isVerified, _id } = service.auth.verifyToken({ token });
  if (!isVerified) {
    return res.redirect('/signin');
  }
  const user = await Users.findById({ _id });
  req.userData = user;
  next();
};
