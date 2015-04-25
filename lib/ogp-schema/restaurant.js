var Currency = {
  amount: { type: 'Float' },
  currency: { type: 'String' }
};
module.exports = {
  type: 'object',
  children: {
    restaurant: { type: 'Reference' },
    item: {
      type: 'array',
      plural: 'items',
      subtype: 'Reference'
    },
    category: {
      type: 'array',
      plural: 'categories',
      subtype: 'String'
    },
    'contact_info': {
      type: 'object',
      children: {
        'street_address': { type: 'String' },
        locality: { type: 'String' },
        region: { type: 'String' },
        'country_name': { type: 'String' },
        'postal_code': { type: 'String' },
        email: { type: 'String' },
        'phone_number': { type: 'String' },
        'fax_number': { type: 'String' },
        website: { type: 'URL' }
      }
    },
    // NOTE!
    // https://developers.facebook.com/docs/reference/opengraph/object-type/restaurant.menu_section/
    // says `menu` is a Reference
    // https://developers.facebook.com/docs/reference/opengraph/object-type/restaurant.restaurant/
    // says `menu` is an Array<Reference>
    // We go for the Array<Reference> to avoid loss of generality
    menu: {
      type: 'array',
      plural: 'menus',
      subtype: 'Reference'
    },
    'price_rating': {
      type: 'Integer'
    },
    section: {
      type: 'array',
      plural: 'sections',
      subtype: 'Reference'
    },
    variation: {
      type: 'array',
      plural: 'variations',
      subtype: 'object',
      children: {
        name: { type: 'string' },
        price: {
          type: 'array',
          plural: 'prices',
          subtype: 'object',
          children: Currency
        },
      }
    }
  }
};
