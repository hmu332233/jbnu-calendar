const jwt = require('jsonwebtoken');
const Users = require('../models/users');

const { JWT_SECRET } = require('../configs');

exports.verifyUserAndReturnToken = async function ({ email, password }) {
  const { user, isVerified } = await Users.verify({ email, password });
  if (!isVerified) {
    return { isVerified: false };
  }

  const token = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: '1d' });
  return { isVerified: true, token };
}