'use strict';

const Brick = require('cta-brick');

class Messenger extends Brick {

  process(context) {
    const res = this.cementHelper.dependencies.healthcheck.update(context.data.payload);
    if (res.result === 'ok') {
      context.emit('done', this.name, res);
    } else {
      context.emit('reject', this.name, res);
    }
  }
}

module.exports = Messenger;
