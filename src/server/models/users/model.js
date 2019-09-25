const { db, CONSTANTS } = require('./info');

const Users = {
  CONSTANTS,
  verify: async function ({ email, password }) {
    const user = await db.findOne({ email, password }).lean();

    if (!user) {
      return { isVerified: false };
    }

    return { user, isVerified };
  }
}

module.exports = Users;