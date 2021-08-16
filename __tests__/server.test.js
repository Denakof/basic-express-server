'user strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const request = supertest(server);

describe('express server', () => {



    it('shoud check the data it works successfully', async () => {
        // arrange
        let param = '/';
        let status = 200;
        // act
        const response = await request.get(param);
        // assert
        expect(response.status).toBe(status);
        expect(typeof response.body).toEqual('object');
    });

    it('shoud check 404 not found errors', async () => {
        // arrange
        let param = '/notfoundd';
        let status = 404;
        // act
        const response = await request.get(param);
        // assert
        expect(response.status).toBe(status);
    });

it('should check 500 errors', async () => {
    // arrange
    let param = '/person';
    let status = 500;
    // act
    const response = await request.get(param);
    // assert
    expect(response.status).toBe(status);
    // expect(response.body.route).toBe(param);
});


it('shoud check 404 not found errors', async () => {
    // arrange
    let param = '/person';
    let status = 404;
    // act
    const response = await request.put(param);
    // assert
    expect(response.status).toBe(status);
});
});

