const Schedules = require('../models/schedules');
const Calendars = require('../models/calendars');

exports.create = async (req, res, next) => {
  const { calendarId, title, body, location, url, start, end, allDay } = req.body;
  try {
    const newSchedule = await Schedules.create({
      calendarId,
      title,
      body,
      location,
      url,
      start,
      end,
      category: allDay ? Schedules.CONSTANTS.CATEGORY.ALLDAY : Schedules.CONSTANTS.CATEGORY.TIME,
    });
    res.json(newSchedule);
  } catch (err) {
    next(err);
  }
};

exports.getMySchedules = async (req, res, next) => {
  try {
    // TODO: 내가 등록한 스케쥴만 가져오도록 하기
    // NOTE: 그 이전에 auth 관련 기능들이 먼저 만들어져야함
    const schedules = await Schedules.getMySchedules();
    res.json(schedules.map(v => ({ ...v, id: v._id })));
  } catch (err) {
    next(err);
  }
};

exports.getSchedulesWithin1Month = async (req, res, next) => {
  const { date } = req.query;
  try {
    const calendars = await Calendars.getAllCalendars();
    const schedules = await Schedules.getSchedulesWithin1Month({ date });
    res.json({
      calendars,
      schedules: schedules.map(v => ({ ...v, id: v._id })),
    });
  } catch (err) {
    next(err);
  }
};
