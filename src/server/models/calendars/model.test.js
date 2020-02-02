const { setupDB } = require('../../tests/setupDb');
setupDB();

const { db, CONSTANTS } = require('./info');
const { getAllCalendars } = require('./model');

describe('getAllCalendars', () => {
  beforeAll(async () => {
    await db.calendars.create({ id: 'AcademicSchedule', name: '학사 일정' });
  });

  test('모든 캘린더 가져오는지', async () => {
    const calendars = await getAllCalendars();
    expect(calendars.length).toEqual(1);
  });
});
