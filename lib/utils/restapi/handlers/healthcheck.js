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
   * Publishes update
   * @param req
   * @param res
   * @param next
   */
  update(req, res) {
    const response = this.cementHelper.dependencies.healthcheck.update(req.body.id, req.body.data);
    if (response === true) {
      res.status(200).send({ result: response });
    } else {
      res.status(500).send({ error: response });
    }
  }
}

module.exports = Handler;
