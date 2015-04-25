/* http://ogp.me/ns/article */
var Tag = require('./common').Tag;
module.exports = {
  type: 'object',
  children: {
    author: {
      type: 'array',
      subtype: 'Profile',
      plural: 'authors',
    },
    'expiration_time': { type: 'DateTime' },
    'modified_time': { type: 'DateTime' },
    'published_time': { type: 'DateTime' },
    publisher: { type: 'Profile' },
    section: { type: 'String' },
    tag: Tag
  }
};
