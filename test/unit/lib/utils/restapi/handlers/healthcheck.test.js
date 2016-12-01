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
  it('', function() {
    const handler = new Handler(CementHelper);
    sinon.stub(CementHelper.dependencies.healthcheck, 'update')
      .returns(true);
    const req = {
      body: {
        id: 'some id',
        data: 'some data',
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
    sinon.assert.calledWith(res.send, { result: true });
    CementHelper.dependencies.healthcheck.update.restore();
    sinon.stub(CementHelper.dependencies.healthcheck, 'update')
      .returns('error');
    handler.update(req, res);
    sinon.assert.calledWith(res.status, 500);
    sinon.assert.calledWith(res.send, { error: 'error' });
  });
});
