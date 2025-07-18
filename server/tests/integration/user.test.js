const request = require('supertest');
const app = require('../../src/app'); // Your express app
const mongoose = require('mongoose');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URL_TEST || 'mongodb://localhost:27017/test-db');
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe("User API", () => {
  it("should return all users", async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
