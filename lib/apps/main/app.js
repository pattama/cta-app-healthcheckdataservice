'use strict';

const path = require('path');
const FlowControl = require('cta-flowcontrol');
const config = require('cta-common').config('cta-app-healthcheckdataservice');

const Cement = FlowControl.Cement;
const cement = new Cement(config, path.join(__dirname, '..', '..')); // eslint-disable-line no-unused-vars
