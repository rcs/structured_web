'use strict';

var _ = require('underscore');

var SCHEMA = require('./ogp-schema');
// If we don't have a specified schema, we'll assume it's boring
var IMPLICIT_SCHEMA = {
  type: 'object',
  children: {}
};

function childSchema(schema, childName) {
  return schema && schema.children && schema.children[childName];
}

function collectSchemas(path) {
  var targetSchema = SCHEMA;
  var schemas =  path.map(function(pathSegment) {
    targetSchema = childSchema(targetSchema, pathSegment) || IMPLICIT_SCHEMA;
    return targetSchema;
  });

  return schemas;
}

function coerceValue(type, value) {
  var lcType = _.isString(type) ? type.toLowerCase() : type.type.toLowerCase();
  if( lcType === 'integer' ) {
    return parseInt(value,10);
  }
  else if( lcType === 'float' ) {
    return parseFloat(value);
  }
  else if( lcType === 'boolean' ) {
    switch (value.toLowerCase()) {
      case 'false':
        /* falls through */
      case '0':
        /* falls through */
        return false;
      case 'true':
        /* falls through */
      case '1':
        return true;
      default:
        return false;
    }
  }
  else {
    return value;
  }
}

function set( target, path, value ) {
  var currentTarget = target,
      plural,
      containingArray;

  var schemas = collectSchemas(path);

  var childSchema;

  for( var i = 0; i < schemas.length - 1; i++ ) {
    childSchema = schemas[i];
    if( childSchema.type === 'object' ) {
      // Initialize an empty object if necessary
      currentTarget[path[i]] = currentTarget[path[i]] || {};
      currentTarget = currentTarget[path[i]];
    }
    else if( childSchema.type === 'array' ) {
      plural = childSchema.plural;
      currentTarget[plural] = currentTarget[plural] || [];

      if( !_.contains(['object','array'], childSchema.subtype) ) {
        currentTarget = currentTarget[plural];
      }
      else {
        // Be generous and allow e.g. og:image:url without ever seeing an
        // og:image, unless we have somethng like business:hours:day that's
        // going to be 'rooting' anyway
        if( currentTarget[plural].length === 0 ) {
          currentTarget[plural].push({});
        }

        // Set current target to the last element of the array
        containingArray = currentTarget[plural];
        currentTarget = currentTarget[plural][currentTarget[plural].length - 1];
      }
    }
  }


  // used as an object construction placeholder
  var pathLength = path.length;
  var tipSchema = schemas[pathLength - 1];
  var pathTip = path[pathLength - 1];

  if( tipSchema.pathAlias ) {
    return set( target, path.concat(tipSchema.pathAlias), value);
  }

  if( _.any(schemas.slice(0,-1), function(schema) {
      return schema.type === 'array' && !schema.children;
    } ) ) {
    return;
  }

  if( tipSchema.type === 'array' && !_.contains(['array','object'], tipSchema.subtype) ){
    plural = tipSchema.plural;
    currentTarget[plural] = currentTarget[plural] || [];
    currentTarget[plural].push(coerceValue(tipSchema.subtype, value) );
  }
  else if( tipSchema === IMPLICIT_SCHEMA ||
          !_.contains(['array','object'], tipSchema.type)
         ){
    // If we are in an array-branch, and we have conflicts, we assume we want another element.
    // Add the element and restart
    if( containingArray && typeof currentTarget[pathTip] !== 'undefined' ) {
      containingArray.push({});
      return set( target, path, value);
    }
    else {
      currentTarget[pathTip] = coerceValue(tipSchema.type, value);
    }
  }

  return target;
}

module.exports = function(metaTags) {
  var collected = {};

  metaTags.forEach(function(tag) {

    var path = tag.property.split(':');
    // No ns prefix on this path, bail
    if( path.length < 2 ) {
      return;
    }
    set(collected, tag.property.split(':'), tag.content);
    return;
  });

  return collected;
};
