const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('responds with Hello, World!', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('<H1 style="color:red">Hello, World!</H1>', done);
  });
});
