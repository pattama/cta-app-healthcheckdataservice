/**
 * This source code is provided under the Apache 2.0 license and is provided
 * AS IS with no warranty or guarantee of fit for purpose. See the project's
 * LICENSE.md for details.
 * Copyright 2017 Thomson Reuters. All rights reserved.
 */

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
