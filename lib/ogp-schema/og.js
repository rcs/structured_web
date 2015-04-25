/* http://ogp.me/ns/fb */
var Locale = require('./common').Locale;
var COUNTRIES = [
  'AF', 'AX', 'AL', 'DZ', 'AS', 'AD', 'AO', 'AI', 'AQ', 'AG', 'AR', 'AM', 'AW',
  'AU', 'AT', 'AZ', 'BS', 'BH', 'BD', 'BB', 'BY', 'BE', 'BZ', 'BJ', 'BM', 'BT',
  'BO', 'BQ', 'BA', 'BW', 'BV', 'BR', 'IO', 'BN', 'BG', 'BF', 'BI', 'KH', 'CM',
  'CA', 'CV', 'KY', 'CF', 'TD', 'CL', 'CN', 'CX', 'CC', 'CO', 'KM', 'CG', 'CD',
  'CK', 'CR', 'CI', 'HR', 'CU', 'CW', 'CY', 'CZ', 'DK', 'DJ', 'DM', 'DO', 'EC',
  'EG', 'SV', 'GQ', 'ER', 'EE', 'ET', 'FK', 'FO', 'FJ', 'FI', 'FR', 'GF', 'PF',
  'TF', 'GA', 'GM', 'GE', 'DE', 'GH', 'GI', 'GR', 'GL', 'GD', 'GP', 'GU', 'GT',
  'GG', 'GN', 'GW', 'GY', 'HT', 'HM', 'VA', 'HN', 'HK', 'HU', 'IS', 'IN', 'ID',
  'IR', 'IQ', 'IE', 'IM', 'IL', 'IT', 'JM', 'JP', 'JE', 'JO', 'KZ', 'KE', 'KI',
  'KP', 'KR', 'KW', 'KG', 'LA', 'LV', 'LB', 'LS', 'LR', 'LY', 'LI', 'LT', 'LU',
  'MO', 'MK', 'MG', 'MW', 'MY', 'MV', 'ML', 'MT', 'MH', 'MQ', 'MR', 'MU', 'YT',
  'MX', 'FM', 'MD', 'MC', 'MN', 'ME', 'MS', 'MA', 'MZ', 'MM', 'NA', 'NR', 'NP',
  'NL', 'AN', 'NC', 'NZ', 'NI', 'NE', 'NG', 'NU', 'NF', 'MP', 'NO', 'OM', 'PK',
  'PW', 'PS', 'PA', 'PG', 'PY', 'PE', 'PH', 'PN', 'PL', 'PT', 'PR', 'QA', 'RE',
  'RO', 'RU', 'RW', 'BL', 'SH', 'KN', 'LC', 'MF', 'PM', 'VC', 'WS', 'SM', 'ST',
  'SA', 'SN', 'RS', 'SC', 'SL', 'SG', 'SX', 'SK', 'SI', 'SB', 'SO', 'ZA', 'GS',
  'SS', 'ES', 'LK', 'SD', 'SR', 'SJ', 'SZ', 'SE', 'CH', 'SY', 'TW', 'TJ', 'TZ',
  'TH', 'TL', 'TG', 'TK', 'TO', 'TT', 'TN', 'TR', 'TM', 'TC', 'TV', 'UG', 'UA',
  'AE', 'GB', 'UK', 'US', 'UM', 'UY', 'UZ', 'VU', 'VE', 'VN', 'VG', 'VI', 'WF',
  'EH', 'YE', 'ZM', 'ZW'
];
module.exports = {
  type: 'object',
  children: {
    audio: {
      type: 'array',
      subtype: 'object',
      plural: 'audio',
      pathAlias: 'url',
      children: {
        url: { type: 'String' },
        'secure_url': { type: 'URL' },
        type: { type: 'String' }
      }
    },
    description: { type: 'String' },
    determiner: { type: 'Enum', members: ['a','an','the', '', 'auto'] },
    image: {
      type: 'array',
      subtype: 'object',
      plural: 'images',
      pathAlias: 'url',
      children: {
        url: { type: 'String' },
        'secure_url': { type: 'String' },
        type: { type: 'String' },
        width: {type: 'integer'},
        height: {type: 'integer'},
        'user_generated': {type: 'boolean'},
      }
    },
    locale: Locale,
    restrictions: {
      type: 'object',
      children: {
        country: {
          type: 'object',
          children: {
            allowed: {
              plural: 'allowed',
              type: 'array',
              subtype: {
                type: 'Enum',
                members: COUNTRIES
              },
            },
            disallowed: {
              plural: 'disallowed',
              type: 'array',
              subtype: {
                type: 'Enum',
                members: COUNTRIES
              }
            }
          }
        },
        age: {
          type: 'Enum',
          members: ['13+', '17+', '18+', '19+', '21+']
        },
        content: {
          type: 'array',
          subtype: {
            type: 'Enum',
            members: ['alcohol']
          },
          plural: 'content'
        }
      }
    },

    'rich_attachment': {type: 'boolean'},
    'see_also': {
      type: 'array',
      subtype: 'URL',
      plural: 'see_also'
    },
    'site_name': { type: 'String' },
    'title': { type: 'String' },
    'type': { type: 'String' },
    'updated_time': { type: 'DateTime' },
    'url': { type: 'URL' },
    video: {
      type: 'array',
      subtype: 'object',
      plural: 'videos',
      pathAlias: 'url',
      children: {
        url: { type: 'URL' },
        'secure_url': { type: 'URL' },
        width: {type: 'integer'},
        height: {type: 'integer'}
      }
    },

  }
};
