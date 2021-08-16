'use strict'

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
});