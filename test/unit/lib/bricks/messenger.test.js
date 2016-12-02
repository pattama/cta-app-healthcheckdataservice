'use strict';

const root = require('cta-common').root('cta-app-healthcheckdataservice');
const Messenger = require(`${root}/lib/bricks/messenger`);
const sinon = require('sinon');
const Context = require('events').EventEmitter;

describe('Brick messenger', function() {
  it('should process with health update', function() {
    const config = {
      name: 'someBrick',
      properties: {},
    };
    const CementHelper = {
      constructor: {
        name: 'CementHelper',
      },
      brickName: 'someBrick',
      dependencies: {
        logger: {
          author: () => {
            return {
              info: () => {},
            };
          },
          info: () => {},
        },
        healthcheck: {
          update: () => {},
        },
      },
      createContext: () => {},
    };
    const mockResponse = { result: 'ok' };
    sinon.stub(CementHelper.dependencies.healthcheck, 'update')
      .returns(mockResponse);
    const messenger = new Messenger(CementHelper, config);
    const context = new Context();
    context.data = {
      payload: {
        name: 'some name',
        status: 'green',
      },
    };
    sinon.stub(context, 'emit');
    messenger.process(context);
    sinon.assert.calledWith(context.emit, 'done', 'someBrick', mockResponse);
    CementHelper.dependencies.healthcheck.update.restore();
    sinon.stub(CementHelper.dependencies.healthcheck, 'update')
      .returns('error');
    messenger.process(context);
    sinon.assert.calledWith(context.emit, 'reject', 'someBrick', 'error');
  });
});
