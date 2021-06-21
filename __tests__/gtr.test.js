const request = require('supertest');
const httpStatus = require('http-status');

const { app } = require('../src/index');

describe('POST /api/retriveDataByFilter', () => {
  it('should return success with correct data', async () => {
    const correctData = {
      startDate: '2016-01-26',
      endDate: '2018-02-02',
      minCount: 2700,
      maxCount: 3000,
    };

    const response = await request(app)
      .post('/api/retriveDataByFilter')
      .send(correctData);
    expect(response.body).toHaveProperty('records');
    expect(response.statusCode).toBe(httpStatus.OK);
  });

  it('should return error if body empty', async () => {
    const response = await request(app).post('/api/retriveDataByFilter').send();
    expect(response.body.msg).toEqual('"minCount" is required');
    expect(response.statusCode).toBe(httpStatus.NOT_FOUND);
  });

  it('should return error if minCount is greater than maxCount ', async () => {
    const correctData = {
      startDate: '2016-01-26',
      endDate: '2018-02-02',
      minCount: 2700,
      maxCount: 100,
    };
    const response = await request(app)
      .post('/api/retriveDataByFilter')
      .send(correctData);
    expect(response.body.msg).toEqual(
      '"maxCount" must be greater than ref:minCount'
    );
    expect(response.statusCode).toBe(httpStatus.NOT_FOUND);
  });

  it('should return error if startDate is after endDate ', async () => {
    const correctData = {
      startDate: '2016-01-26',
      endDate: '2012-02-02',
      minCount: 2700,
      maxCount: 3000,
    };
    const response = await request(app)
      .post('/api/retriveDataByFilter')
      .send(correctData);
    expect(response.body.msg).toEqual(
      '"endDate" must be greater than or equal to "ref:startDate"'
    );
    expect(response.statusCode).toBe(httpStatus.NOT_FOUND);
  });
});
