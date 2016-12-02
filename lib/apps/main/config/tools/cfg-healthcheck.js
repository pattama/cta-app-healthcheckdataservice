'use strict';

module.exports = {
  name: 'healthcheck',
  module: 'cta-healthcheck',
  properties: {},
  dependencies: {
    express: 'express',
  },
  scope: 'bricks',
  singleton: true,
  order: 4,
};
