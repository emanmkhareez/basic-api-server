"use strict";
const server = require("../src/server");
const supertest = require("supertest");
const request = supertest(server.app);

describe('middleware server', () => {
    let id;
  it('Post method', async () => {
    const Obj = {
      name: 'Pizza',
      description: 'Pizza Hut'
    };
    const response = await request.post('/').send(Obj);
    id = response.body.id;
    expect(response.status).toEqual(200);
    expect(response.body.data.name).toBe(Obj.name);
    expect(response.body.data.description).toBe(Obj.description);
  });
});