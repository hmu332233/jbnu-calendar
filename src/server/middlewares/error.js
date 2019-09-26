exports.handler = (err, req, res, next) => {
  console.log(err);
  next();
};
