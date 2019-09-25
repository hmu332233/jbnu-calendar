const service = require('../services');

exports.signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const { isVerified, token } = await service.auth.verifyUserAndReturnToken({ email, password });
    if (!isVerified) {
      return res.json({ result: false, });
    }
    res.cookie('x-access-token', token);
    res.json({ result: true });
  } catch (err) {
    next(err);
  }
};