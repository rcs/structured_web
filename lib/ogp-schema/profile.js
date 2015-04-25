module.exports = {
  type: 'object',
  children: {
    'first_name': { type: 'String' },
    'last_name': { type: 'String' },
    'gender': { type: 'Enum', members: ['male', 'female'] },
    'username': { type: 'String' },
  }
};
