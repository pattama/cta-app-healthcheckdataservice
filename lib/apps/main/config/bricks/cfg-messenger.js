'use strict';

module.exports = {
  name: 'messenger',
  module: './bricks/messenger',
  properties: {},
  dependencies: {
    healthcheck: 'healthcheck',
  },
  subscribe: [{
    topic: 'messages',
    data: [{}],
  }],
};
