'use strict';
module.exports = {
  type: 'object',
  children: {
    'contact_data': {
      type: 'object',
      children: {
        'street_address': {type: 'String'},
        locality: {type: 'String'},
        region: {type: 'String'},
        'postal_code': {type: 'String'},
        'country_name': {type: 'String'},
        email: {type: 'String'},
        'phone_number': {type: 'String'},
        'fax_number': {type: 'String'},
        website: {type: 'URL'}
      }
    },
    hours: {
      type: 'array',
      subtype: 'object',
      plural: 'hours',
      children: {
        day: {
          type: 'Enum',
          members: [
            'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday',
            'sunday'
          ]
        },
        start: { type: 'TimeOfDay' },
        end: { type: 'TimeOfDay' }
      }
    }
  }
};
