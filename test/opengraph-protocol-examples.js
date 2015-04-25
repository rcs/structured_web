
/* global describe, it */
'use strict';
var chai = require('chai');
var expect = chai.expect;
var path = require('path');
var fs = require('fs');
var metaExtract = require('../lib/meta');

var ogExtract = require('../lib/og');
describe('opengraph-protocol-examples', function() {
  [
    'article-offset',
    'article-utc',
    'article',
    'audio-array',
    'audio-url',
    'audio',
    'book-isbn10',
    'book',
    'canadian',
    'error',
    // TODO errors
    // TODO xss sanitization?
    'filters',
    'image-array',
    'image-toosmall',
    'image-url',
    'image',
    'index',
    'min',
    'nomedia',
    'plain',
    'profile',
    'required',
    'video',
    'video-movie',
    'video-array',
    ['errors', 'article-date'],
    ['errors', 'book-author'],
    ['errors', 'book'],
    ['errors', 'gender'],
    ['errors', 'geo'],
    ['errors', 'type'],
    ['errors', 'video-duration'],
  ].forEach(function(fixturePath) {
    var fixtureBase = path.join.apply(
      null,
      [__dirname, 'fixtures', 'open-graph-protocol-examples'].concat(fixturePath)
    );
    it('extracts from ' + fixturePath, function(done) {
      fs.createReadStream(path.join(fixtureBase, 'index.html'))
        .pipe(metaExtract(function(err, tags) {
          var expected = require(path.join(fixtureBase, 'og.json'));
          expect(ogExtract(tags)).to.deep.equal(expected);
          done();
        }));
    });
  });
});
