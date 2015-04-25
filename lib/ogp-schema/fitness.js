'use strict';

var CustomUnitQuantity = {
  type: 'object',
  children: {
    value: { type: 'Float' },
    units: { type: 'Reference' }
  }
};
var Quantity = require('./common').Quantity;

var GeoPoint = require('./common').GeoPoint;

module.exports = {
  type: 'object',
  children: {
    calories: { type: 'integer'},
    'custom_unit_energy': CustomUnitQuantity,
    distance: Quantity,
    duration: Quantity,
    'live_text': { type: 'String' },
    metrics: {
      type: 'array',
      subtype: 'object',
      plural: 'metrics',
      children: {
        // TODO subtype
        calories: { type: 'integer' },
        'custom_unit_energy': CustomUnitQuantity,
        distance: Quantity,
        location: GeoPoint,
        speed: Quantity,
        timestamp: { type: 'DateTime' },
        pace: Quantity
      }
    },
    pace: Quantity,
    speed: Quantity,
    splits: {
      type: 'object',
      children: {
        unit: { type: 'Enum', members: ['mi','km'] },
        values: {type: 'array', subtype: 'object', plural: 'values', children: Quantity}
      }
    },
    steps: {type: 'integer'}
  }
};
