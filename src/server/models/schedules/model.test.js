const { setupDB } = require('../../tests/setupDb');
setupDB();

const { db, CONSTANTS } = require('./info');
const { create, getSchedulesWithin1Month } = require('./model');

describe('create', () => {
  test('모든 데이터가 있을때 해당 내용으로 db에 저장이 됨', async () => {
    const newSchedule = {
      title: 'createTest',
      body: 'createTest',
      location: 'createLocation',
      url: 'createUrl',
      start: new Date('2012-01-01'),
      end: new Date('2012-01-01'),
      category: CONSTANTS.CATEGORY.TIME,
      show: true,
    };

    await create(newSchedule);

    const schedule = await db.schedules.findOne({ title: 'createTest' }, { __v: 0, _id: 0 }).lean();
    expect(schedule).toEqual(newSchedule);
  });

  test('category와 show가 없을때 없을때 allDay와 true로 저장이 됨', async () => {
    const newSchedule = {
      title: 'createTest2',
      body: 'createTest2',
      location: 'createLocation2',
      url: 'createUrl2',
      start: new Date('2013-01-01'),
      end: new Date('2013-01-01'),
    };

    await create(newSchedule);

    const schedule = await db.schedules.findOne({ title: 'createTest2' }, { __v: 0, _id: 0 }).lean();
    expect(schedule.category).toEqual(CONSTANTS.CATEGORY.ALLDAY);
    expect(schedule.show).toEqual(true);
  });
});

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
