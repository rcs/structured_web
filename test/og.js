/* global describe, it */
'use strict';
var chai = require('chai');
var expect = chai.expect;

var ogExtract = require('../lib/og');

describe('og extraction parsing', function() {
  it('does basic things', function() {
    expect(ogExtract([
      {property: 'title', content: 'bad title'},
      {property: 'og:title', content: 'good title'},
      {property: 'og:content', content: 'good content'},
      {property: 'content', content: 'bad content'},
    ])).to.deep.equal({
      og: {
        title: 'good title',
        content: 'good content'
      }
    });

  });

  it('expands meta tags to match the "assumed" sub property', function() {
    expect(ogExtract([
      {property: 'og:image', content: 'http://url'},
      {property: 'og:video', content: 'http://video'},
      {property: 'og:audio', content: 'http://audio'}
    ])).to.deep.equal({
      og: {
        images: [
          { url: 'http://url' }
        ],
        videos: [
          { url: 'http://video' }
        ],
        audio: [
          { url: 'http://audio' }
        ]
      }
    });
  });

  it('is lenient enough for ad-hoc values', function() {
    expect(ogExtract([
      {property: 'og:not:a:schemad:name', content: 'things'}
    ])).to.deep.equal({
      og: { not: { a: { schemad: { name: 'things' } } } }
    });
  });

  describe('doesn\'t barf on sub-properties that don\'t match the schema', function() {
    it('handles array-like things', function() {
      expect(ogExtract([
        {property: 'article:tag:extra', content: 'foo'},
        {property: 'article:tag', content: 'bar'},
        {property: 'article:tag:extra', content: 'foo'},
      ])).to.deep.equal({article: { tags: ['bar'] }});
    });
    it( 'handles object-like things', function() {
      expect(ogExtract([
        {property: 'og:locale:locale:extra', content: 'things'},
        {property: 'og:locale:locale', content: 'en_US'}
      ])).to.deep.equal({
        og: {
          locale: {
            extra: 'things',
            locale: 'en_US'
          }
      }});
    });
  });

  it('handles "rerooting" tags when multiple are specified', function() {
    expect(ogExtract([
      {property: 'og:image', content: 'http://firsturl'},
      {property: 'og:image:secure_url', content: 'https://firsturl'},
      {property: 'og:image', content: 'http://secondurl'},
      {property: 'og:image:width', content: '300'}
    ])).to.deep.equal({
      og: {
        images: [
          {
            url: 'http://firsturl',
            'secure_url': 'https://firsturl'
          },
          {
            url: 'http://secondurl',
            width: 300
          }
        ]
        }
    });
  });
  it('constructs og hierarchy', function() {
    var metaTags = require('./fixtures/ogp.me-20150313/metaTags.json');
    expect(ogExtract(metaTags)).to.deep.equal(require('./fixtures/ogp.me-20150313/og.json'));
  });

});
