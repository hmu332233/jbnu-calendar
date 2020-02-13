const axios = require('axios');

exports.sendMessage = ({ message }) => {
  const data = {
    text: message,
  };
  return axios.post(process.env.SLACK_HOOK_URL, data);
};

exports.sendErrorMessage = err => {
  const title = '에러가 발생했습니다!';
  const body = `${err.message}\n${JSON.stringify(err.stack)}`;
  const message = `${title}\n${body}`;
  return this.sendMessage({ message });
};