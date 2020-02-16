const service = require('../services');
const Users = require('../models/users');

exports.checkView = () => async (req, res, next) => {
  const token = req.cookies['x-access-token'] || req.query.token;
  if (!token) {
    return res.redirect('/signin');
  }

  const { isVerified, _id } = service.auth.verifyToken({ token });
  if (!isVerified) {
    return res.redirect('/signin');
  }
  const user = await Users.findById({ _id });
  req.userData = user;
  next();
};

exports.checkAuth = () => async (req, res, next) => {
  const token = req.cookies['x-access-token'] || req.query.token;
  if (!token) {
    return res.status(401).json(false);
  }

  const { isVerified, _id } = service.auth.verifyToken({ token });
  if (!isVerified) {
    return res.status(401).json(false);
  }
  const user = await Users.findById({ _id });
  req.userData = user;
  next();
};
