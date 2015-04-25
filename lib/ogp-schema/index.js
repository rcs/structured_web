module.exports = {
  type: 'object',
  children: {
    al: require('./al'),
    og: require('./og'),
    article: require('./article'),
    book: {
      type: 'object',
      children: {
        tag: require('./common').Tag,
      }
    },
    books: require('./books'),
    business: require('./business'),
    fitness: require('./fitness'),
    game: require('./game'),
    music: require('./music'),
    place: require('./place'),
    product: require('./product'),
    profile: require('./profile'),
    restaurant: require('./restaurant'),
    video: require('./video'),
    fb: {
      type: 'object',
      children: {
        admins: {
          type: 'array',
          subtype: 'String',
          plural: 'admins'
        },
        'app_id': { type: 'Facebook ID' },
        profile: { type: 'Profile' }
      }
    },

  }
};
