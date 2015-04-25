/* global describe, it */
'use strict';
var chai = require('chai');
var expect = chai.expect;
var path = require('path');
var fs = require('fs');
var metaExtract = require('../lib/meta');

var ogExtract = require('../lib/og');
describe('ogp-schemas', function() {
  [
    'al',
    'fb',
    'og',
    'article',
    'books.author',
    'books.book',
    'books.genre',
    'business.business',
    'fitness.course',
    'game.achievement',
    'music.album',
    'music.playlist',
    'music.radio_station',
    'music.song',
    'place',
    'product',
    'product.group',
    'product.item',
    'profile',
    'restaurant.menu',
    'restaurant.menu_item',
    'restaurant.menu_section',
    'restaurant.restaurant',
    'video.episode',
    'video.movie',
    'video.other',
    'video.tv_show',
  ].forEach(function(fixturePath) {
    var fixtureBase = path.join.apply(
      null,
      [__dirname, 'fixtures', 'ogp-schemas'].concat(fixturePath)
    );
    it('extracts from ' + fixturePath + ' schema', function(done) {
      fs.createReadStream(path.join(fixtureBase, 'index.html'))
        .pipe(metaExtract(function(err, tags) {
          var expected = require(path.join(fixtureBase, 'og.json'));
          expect(ogExtract(tags)).to.deep.equal(expected);
          done();
        }));
    });
  });
});
