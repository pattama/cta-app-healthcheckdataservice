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
