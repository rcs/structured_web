var LOCALE_ENUMS = require('./constants').LOCALE_ENUMS;
var UNIT_NAMES = require('./constants').UNIT_NAMES;

module.exports = {
  Tag: {
    type: 'array', subtype: 'simple', plural: 'tags'
  },
  Locale: {
    type: 'object',
    pathAlias: 'locale',
    children: {
      locale: { type: 'Enum', members: LOCALE_ENUMS },
      alternate: {
        type: 'array',
        subtype: { type: 'Enum', members: LOCALE_ENUMS },
        plural: 'alternates'
      }
    }
  },
  GeoPoint: {
    type: 'object',
    children: {
      latitude: { type: 'float' },
      longitude: { type: 'float' },
      altitude: { type: 'float' }
    }
  },
  Quantity: {
    type: 'object',
    children: {
      value: { type: 'Float' },
      units: { type: 'Enum', members: UNIT_NAMES }
    }
  }

};

