const { db, CONSTANTS } = require('./info');
const dayjs = require('dayjs');

exports.create = ({ name, location, url, startDate, endDate, isAllDay }) => {
  const data = { name, location, url, startDate, endDate, isAllDay };
  return db.events.create(data);
};

// 해당 날짜 월기준 전후 포함 3개월 내의 이벤트들을 가져온다.
exports.getEventsWithin3Month = ({ date = new Date() }) => {
  const prevDate = dayjs(date).subtract(1, 'month').toDate();
  const nextDate = dayjs(date).add(1, 'month').toDate();

  const betweenQuery = { $gt: prevDate, $lt: nextDate };
  return db.events.find({
    $or: [
      { startDate: betweenQuery },
      { endDate: betweenQuery },
    ],
  }).lean();
};
