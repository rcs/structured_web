var Currency = {
  amount: { type: 'Float' },
  currency: { type: 'String' }
};

var Quantity = require('./common').Quantity;

module.exports = {
  type: 'object',
  children: {
    'age_group': { type: 'Enum', members: ['kids', 'adult'] },
    availability: { type: 'Enum', members: ['instock','oos','pending'] },
    brand: { type: 'String' },
    category: { type: 'String' },
    color: { type: 'String' },
    condition: { type: 'Enum', members: ['new','refurbished','used'] },
    ean: { type: 'ProductID' },
    'expiration_time': { type: 'DateTime' },
    'is_product_shareable': { type: 'Boolean' },
    isbn: { type: 'ProductID' },
    material: { type: 'String' },
    'mfr_part_no': { type: 'String' },
    'original_price': {
      type: 'array',
      plural: 'original_prices',
      subtype: 'object',
      children: Currency
    },
    pattern: { type: 'String' },
    'plural_title': { type: 'String' },
    'pretax_price': {
      type: 'array',
      plural: 'pretax_prices',
      subtype: 'object',
      children: Currency
    },
    'price': {
      type: 'array',
      plural: 'prices',
      subtype: 'object',
      children: Currency
    },
    'product_link': { type: 'URL' },
    'purchase_limit': { type: 'Integer' },
    retailer: { type: 'Profile' },
    'retailer_category': { type: 'String' },
    'retailer_group_id': { type: 'String' },
    'retailer_part_no': { type: 'String' },
    'retailer_title': { type: 'String' },
    'sale_price': {
      type: 'object',
      children: Currency
    },
    'sale_price_dates': {
      type: 'object',
      children: {
        start: { type: 'DateTime' },
        end: { type: 'DateTime' },
      }
    },
    'shipping_cost': {
      type: 'array',
      plural: 'shipping_costs',
      subtype: 'object',
      children: Currency
    },
    'shipping_weight': Quantity,
    size: { type: 'String' },
    'target_gender': { type: 'Enum', members: ['female','male','unisex'] },
    upc: { type: 'ProductID' },
    weight: Quantity
  }
};
