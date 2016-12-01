'use strict';

module.exports = {
  name: 'restapi',
  module: 'cta-restapi',
  dependencies: {
    express: 'express',
    healthcheck: 'healthcheck',
  },
  properties: {
    providers: [
      {
        name: 'healthcheck',
        module: './utils/restapi/handlers/healthcheck.js',
        routes: [
          {
            method: 'patch',
            handler: 'update',
            path: '/healthcheck',
          },
        ],
      },
    ],
  },
};
