/* global describe, it */
'use strict';
var chai = require('chai');
var expect = chai.expect;

var metaExtract = require('../lib/meta');
var fs = require('fs');
var path = require('path');

describe('Basic parsing', function() {
  it('extracts meta tags', function(done) {
    fs.createReadStream(path.join(__dirname, './fixtures/ogp.me-20150313/index.html'))
      .pipe(metaExtract(function(err, tags) {
        expect(tags).to.deep.equal(require('./fixtures/ogp.me-20150313/metaTags.json'));
        done();
      }));
  });
});
