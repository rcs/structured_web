var IOS_APP = {
  type: 'object',
  children: {
    url: { type: 'Appsite' },
    'app_store_id': { type: 'Integer' },
    'app_name': { type: 'String' }
  }
};
module.exports = {
  type: 'object',
  children: {
    android: {
      type: 'object',
      children: {
        url: { type: 'Appsite' },
        'package': { type: 'AndroidPath' },
        'app_name': { type: 'String' },
        'class': { type: 'String' }
      }
    },
    ios: IOS_APP,
    ipad: IOS_APP,
    iphone: IOS_APP,
    web: {
      type: 'object',
      children: {
        url: { type: 'URL' },
        'should_fallback': { type: 'Boolean' }
      }
    },
    'windows': {
      type: 'object',
      children: {
        url: { type: 'Appsite' },
        'package_family_name': { type: 'String' },
        'app_id': { type: 'Guid' },
        'app_name': { type: 'String' }
      }
    },
    'windows_phone': {
      type: 'object',
      children: {
        url: { type: 'Appsite' },
        'app_id': { type: 'Guid' },
        'app_name': { type: 'String' }
      }
    },
    'windows_universal': {
      type: 'object',
      children: {
        url: { type: 'Appsite' },
        'package_family_name': { type: 'String' },
        'app_id': { type: 'Guid' },
        'app_name': { type: 'String' }
      }
    }
  }
};






