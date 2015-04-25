'use strict';
var GeoPoint = require('./common').GeoPoint;

module.exports = {
  type: 'object',
  children: {
    location: GeoPoint
  }
};
