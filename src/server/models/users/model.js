const { db, CONSTANTS } = require('./info');

exports.CONSTANTS = CONSTANTS;

exports.findById = ({ _id }) => {
  return db.users.findOne({ _id }).lean();
};

exports.verify = async ({ email, password }) => {
  const user = await db.users.findOne({ email, password }).lean();

  if (!user) {
    return { isVerified: false };
  }

  return { user, isVerified: true };
};