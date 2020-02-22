const axios = require('axios');

exports.sendMessage = data => {
  return axios.post(process.env.SLACK_HOOK_URL, data);
};

exports.sendErrorMessage = err => {
  const title = '에러가 발생했습니다!';
  const body = `${err.message}\n${JSON.stringify(err.stack)}`;
  const data = {
    text: `${title}\n${body}`,
  };
  return this.sendMessage(data);
};

exports.sendRequestMessage = ({ calendarId, title, body, location, url, start, end, category }) => {
  const data = {
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `새 일정이 요청되었습니다:\n*${title}*`,
        },
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*calendarId:*\n${calendarId}`,
          },
          {
            type: 'mrkdwn',
            text: `*category:*\n${category}`,
          },
          {
            type: 'mrkdwn',
            text: `*location:*\n${location}`,
          },
          {
            type: 'mrkdwn',
            text: `*url:*\n${url}`,
          },
          {
            type: 'mrkdwn',
            text: `*start:*\n${start}`,
          },
          {
            type: 'mrkdwn',
            text: `*end:*\n${end}`,
          },
          {
            type: 'mrkdwn',
            text: `*body:*\n${body}`,
          },
        ],
      },
      {
        type: 'actions',
        elements: [
          {
            type: 'button',
            text: {
              type: 'plain_text',
              emoji: true,
              text: '승인',
            },
            style: 'primary',
            value: 'approve',
          },
          {
            type: 'button',
            text: {
              type: 'plain_text',
              emoji: true,
              text: '거절',
            },
            style: 'danger',
            value: 'deny',
          },
        ],
      },
    ],
  };

  return this.sendMessage(data);
};
