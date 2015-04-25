'use strict';
var htmlParser = require('htmlparser2');
var cssSelect = require('css-select');
var htmlParser = require('htmlparser2');


function metaFromDom(dom) {
  return CSS.selectAll('head meta[property]').map(function(meta) {
    return [meta.attribs.property, meta.attribs.content];
  });
}



module.exports = function(html) {
  var dom = htmlParser.parseDOM(html);
  return {
    meta: metaFromDom(dom)
  };
};

var inHead = false;


var openGraph = {};
function extractOg(property, content) {
  openGraph[property] = content;
}

var twitterCard = {};
function extractTwitterCard(property, content) {
  twitterCard[property] = content;
}

var handlers = {
  og: function(name, attributes) {
  },
  twitter: function(name, attributes) {
  }
};


function isHeadMetaWithProperty(name,attribs) {

}

var metaTags = [];
var parser = new htmlParser.Parser({
  onopentag: function(name, attribs) {
    var namepath;
    if( name === 'head' ) {
      inHead = true;
    }
    if( inHead &&
        name === 'meta' &&
        attribs.property ) {
        namepath = attribs.property.split(':');
        if( namepath && namepath.length > 1 ) {
          metaTags.push([property, content]);
        }
    }
  },
  onclosetag: function(name) {
    if( name === 'head' ) {
      inHead = false;
    }
  },
});

parser.parse();
