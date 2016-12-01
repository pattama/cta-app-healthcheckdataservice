'use strict';

const Brick = require('cta-brick');

class Messenger extends Brick {

  process(context) {
    const that = this;
    const res = that.cementHelper.dependencies.healthcheck.update(context.data.payload.id, context.data.payload.data);
    if (res === true) {
      context.emit('done', that.name, res);
    } else {
      context.emit('reject', that.name, res);
    }
  }
}

module.exports = Messenger;
