'use strict';

var should = require('should');
var request = require('supertest');
var app = require('../../app');

describe('GET <%= route %>', function() {
    it('should respond with JSON array', function (done) {
        request(app)
            .get('<%= route %>')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }

                res.body.should.be.instanceof(Object);
                done();
            });
    });
});
