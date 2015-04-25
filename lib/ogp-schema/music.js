module.exports = {
  type: 'object',
  children: {
    album: {
      type: 'array',
      plural: 'albums',
      subtype: 'object',
      children: {
        url: { type: 'Reference' },
        disc: { type: 'Integer' },
        track: { type: 'Integer' }
      }
    },

    creator: {
      type: 'Profile'
    },
    duration: { type: 'Integer' },
    isrc: { type: 'ProductID' },
    musician: {
      type: 'array',
      plural: 'musicians',
      subtype: 'Profile',
    },
    'preview_url': {
      type: 'array',
      plural: 'preview_urls',
      subtype: 'object',
      children: {
        url: { type: 'String' },
        'secure_url': { type: 'URL' },
        type: { type: 'String' }
      }
    },
    'release_date': { type: 'DateTime' },
    'release_type': {
      type: 'Enum',
      members: [
        'original_release',
        're_release',
        'anthology'
      ]
    },
    song: {
      type: 'array',
      plural: 'songs',
      subtype: 'object',
      children: {
        url: { type: 'Reference' },
        disc: { type: 'Integer' },
        track: { type: 'Integer' }
      }
    },
    'song_count': {type: 'Integer'}
  }
};
