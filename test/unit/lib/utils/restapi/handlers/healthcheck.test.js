'use strict';

const root = require('cta-common').root('cta-app-healthcheckdataservice');
const Handler = require(`${root}/lib/utils/restapi/handlers/healthcheck`);
const sinon = require('sinon');
const assert = require('chai').assert;
const CementHelper = {
  constructor: {
    name: 'CementHelper',
  },
  brickName: 'restapi',
  logger: {
    author: () => {
      return {
        info: () => {},
      };
    },
    info: () => {},
  },
  dependencies: {
    healthcheck: {
      update: () => {},
    },
  },
};
describe('utils/restapi/handlers/healthcheck', function () {
  it('constructor should return instance of handler with expected properties', function () {
    const handler = new Handler(CementHelper);
    assert.instanceOf(handler, Handler);
  });
  it('update api', function () {
    const handler = new Handler(CementHelper);
    const mockResponse = { result: 'ok' };
    sinon.stub(CementHelper.dependencies.healthcheck, 'update')
      .returns(mockResponse);
    const req = {
      body: {
        name: 'some name',
        status: 'green',
      },
    };
    const res = {
      status: function () {
        return this;
      },
      send: function () {
      },
    };
    sinon.spy(res, 'status');
    sinon.spy(res, 'send');
    handler.update(req, res);
    sinon.assert.calledWith(res.status, 200);
    sinon.assert.calledWith(res.send, mockResponse);
    CementHelper.dependencies.healthcheck.update.restore();
    const mockError = { error: 'some error' };
    sinon.stub(CementHelper.dependencies.healthcheck, 'update')
      .returns(mockError);
    handler.update(req, res);
    sinon.assert.calledWith(res.status, 400);
    sinon.assert.calledWith(res.send, mockError);
  });
});
