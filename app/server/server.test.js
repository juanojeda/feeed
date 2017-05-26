import app from '../server/app';
import { child_process } from 'mz';

// supertest doesn't support ES6 syntax
const request = require('supertest');

describe('build script', () => {

  beforeEach(()=> {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });

  it('builds to the build directory', () => {
    return child_process.exec('npm run build');
  })
});

describe('express serving', () => {

  it('responds to / with "index.html"', () => {
    return request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200)
      .then(res => expect(res.text).toContain('<div id="root"></div>'))
  });

  it('responds to favicon.icon request', function () {
    return request(app)
      .get('/favicon.ico')
      .expect('Content-Type', 'image/x-icon')
      .expect(200);
  });

  it('responds to any route with the index.html', function () {
    return request(app)
      .get('/foo/bar')
      .expect('Content-Type', /html/)
      .expect(200)
      .then(res => expect(res.text).toContain('<div id="root"></div>'))
  });
});
