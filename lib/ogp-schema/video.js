var Tag = require('./common').Tag;
module.exports = {
  type: 'object',
  children: {
    actor: {
      type: 'array',
      plural: 'actors',
      subtype: 'object',
      children: {
        id: { type: 'Profile' },
        role: { type: 'String' }
      }
    },
    director: {
      type: 'array',
      plural: 'directors',
      subtype: 'Profile'
    },
    duration: { type: 'Integer' },
    'release_date': { type: 'DateTime' },
    'series': { type: 'Reference' },
    tag: Tag,
    writer: {
      type: 'array',
      plural: 'writers',
      subtype: 'Profile'
    }
  }
};
