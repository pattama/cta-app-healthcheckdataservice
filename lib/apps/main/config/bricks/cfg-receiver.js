'use strict';

module.exports = {
  name: 'receiver',
  module: 'cta-io',
  dependencies: {
    messaging: 'messaging',
  },
  properties: {
    input: {
      queue: {
        name: 'cta.hck',
        ack: 'auto',
      },
    },
  },
  publish: [{
    topic: 'messages',
    data: [{
      nature: {
        type: 'healthcheck',
        quality: 'update',
      },
    }],
  }],
  subscribe: [{
    topic: 'messages',
    data: [{
      nature: {
        type: 'message',
        quality: 'acknowledge',
      },
    }],
  }],
};
