const { setupDB } = require('../../tests/setupDb');
setupDB();

const { db } = require('./info');
const { getSchedulesWithin1Month } = require('./model');

describe('getSchedulesWithin1Month', () => {
  beforeAll(async () => {
    await db.schedules.create({ title: 'test', start: new Date('2020-01-15'), end: new Date('2020-01-15') });
    await db.schedules.create({ title: 'test', start: new Date('2019-12-12'), end: new Date('2020-01-15') });
    await db.schedules.create({ title: 'test', start: new Date('2019-11-20'), end: new Date('2020-11-30') });
  });

  test('1월의 이벤트만 가져올때, 2개의 이벤트를 가져와야함', async () => {
    const schedules = await getSchedulesWithin1Month({ date: new Date('2020-01-01') });
    expect(schedules.length).toEqual(2);
  });
  test('11월의 이벤트만 가져올때, 1개의 이벤트를 가져와야함', async () => {
    const schedules = await getSchedulesWithin1Month({ date: new Date('2019-11-01') });
    expect(schedules.length).toEqual(1);
  });
});
