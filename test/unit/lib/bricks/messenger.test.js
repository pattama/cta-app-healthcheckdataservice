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
    sinon.stub(CementHelper.dependencies.healthcheck, 'update')
      .returns(true);
    const messenger = new Messenger(CementHelper, config);
    const context = new Context();
    context.data = {
      payload: {
        id: 'some id',
        data: 'some data',
      },
    };
    sinon.stub(context, 'emit');
    messenger.process(context);
    sinon.assert.calledWith(context.emit, 'done', 'someBrick', true);
    CementHelper.dependencies.healthcheck.update.restore();
    sinon.stub(CementHelper.dependencies.healthcheck, 'update')
      .returns('error');
    messenger.process(context);
    sinon.assert.calledWith(context.emit, 'reject', 'someBrick', 'error');
  });
});
