'use strict';
var Locale = require('./common').Locale;
var GENRE_NAMES = require('./constants').GENRE_NAMES;
module.exports = {
  type: 'object',
  children: {
    book: {
      type: 'array',
      subtype: 'Reference',
      plural: 'books'
    },
    gender: { type: 'Enum', members: ['male','female'] },
    genre: {
      type: 'array',
      subtype: 'Reference',
      plural: 'genres'
    },
    'official_site': { type: 'URL' },
    author: {
      type: 'array',
      subtype: 'Reference',
      plural: 'authors'
    },
    'initial_release_date': { type: 'DateTime' },
    isbn: { type: 'String' },
    language: Locale,
    'page_count': { type: 'Integer' },
    rating: {
      type: 'object',
      children: {
        value: { type: 'Float' },
        scale: { type: 'Integer' },
        'normalized_value': { type: 'Float' }
      }
    },
    'release_date': { type: 'DateTime' },
    sample: { type: 'String' },
    'canonical_name': { type: 'Enum', members: GENRE_NAMES }
  }
};

