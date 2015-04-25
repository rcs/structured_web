'use strict';
var htmlparser = require('htmlparser2');

var EventEmitter = require('events').EventEmitter;

function metaParser(foundTag) {
  return new htmlparser.Parser(
    {
      onopentag: function(name, attribs) {
        var propertyName;
        if( name === 'meta' ) {
          propertyName = (attribs.property || attribs.name);
          if(propertyName) {
            foundTag(
              { property: propertyName, content: attribs.content || attribs.value}
            );
          }
        }
      }
    },
    {lowerCaseTags: true}
  );
}

var metaCollector = function(cb) {
  var metaTags = [];
  var stream = new EventEmitter();
  stream.writable = true;

  var parser = metaParser(function(tag) { metaTags.push(tag); });

  stream.write = function(chunk) {
    parser.write(chunk);
  };
  stream.end = function() {
    parser.end();
    cb(null, metaTags);
  };

  return stream;
};


module.exports = metaCollector;
