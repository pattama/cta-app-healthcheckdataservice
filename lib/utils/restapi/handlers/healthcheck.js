/**
 * This source code is provided under the Apache 2.0 license and is provided
 * AS IS with no warranty or guarantee of fit for purpose. See the project's
 * LICENSE.md for details.
 * Copyright 2017 Thomson Reuters. All rights reserved.
 */

'use strict';

/**
 * Handler class for RESTAPI handlers
 * @property {CementHelper} cementHelper - cementHelper from a cta-restapi Brick
 */
class Handler {
  /**
   *
   * @param {CementHelper} cementHelper - cementHelper from a cta-restapi Brick
   */
  constructor(cementHelper) {
    this.cementHelper = cementHelper;
  }

  /**
   * sends healthcheck update to healthcheck tool
   * @param req
   * @param res
   */
  update(req, res) {
    const response = this.cementHelper.dependencies.healthcheck.update(req.body);
    if (response.result === 'ok') {
      res.status(200);
    } else {
      res.status(400);
    }
    res.send(response);
  }
}

module.exports = Handler;
