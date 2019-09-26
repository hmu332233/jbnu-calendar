const { db, CONSTANTS } = require('./info');

const Users = {
  CONSTANTS,
  verify: async function ({ email, password }) {
    const user = await db.users.findOne({ email, password }).lean();

    if (!user) {
      return { isVerified: false };
    }

    return { user, isVerified: true };
  }
}

module.exports = Users;