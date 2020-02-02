const jwt = require('jsonwebtoken');
const Users = require('../models/users');

exports.verifyUserAndReturnToken = async function ({ email, password }) {
  const { user, isVerified } = await Users.verify({ email, password });
  if (!isVerified) {
    return { isVerified: false };
  }

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
  return { isVerified: true, token };
}

exports.verifyToken = ({ token }) => {
  try {
    const secret = process.env.JWT_SECRET;
    const { _id } = jwt.verify(token, secret);
    return { isVerified: true, _id };
  } catch (err) {
    return { isVerified: false };
  }
};