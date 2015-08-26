var test_header = '<http://www.apple.com/>; rel="original", <http://web.archive.org/web/timemap/link/http://www.apple.com/>; rel="timemap"; type="application/link-format", <http://web.archive.org/web/http://www.apple.com/>; rel="timegate", <http://web.archive.org/web/19961022105458/http://www.apple.com/>; rel="first memento"; datetime="Tue, 22 Oct 1996 10:54:58 GMT", <http://web.archive.org/web/20120701173927/http://www.apple.com/>; rel="prev memento"; datetime="Sun, 01 Jul 2012 17:39:27 GMT", <http://web.archive.org/web/20120701222624/http://www.apple.com/>; rel="memento"; datetime="Sun, 01 Jul 2012 22:26:24 GMT", <http://web.archive.org/web/20120701230230/http://www.apple.com/>; rel="next memento"; datetime="Sun, 01 Jul 2012 23:02:30 GMT", <http://web.archive.org/web/20150826205227/http://www.apple.com/>; rel="last memento"; datetime="Wed, 26 Aug 2015 20:52:27 GMT"';
var mementolinks = require('./index.js');
var assert = require("assert");

describe('memento-links', function () {
  var mementos = {};
  beforeEach(function() {
    mementos = mementolinks(test_header);
  });
  describe('should read the link to the', function() {
    it('original', function () {
      assert.equal('http://www.apple.com/', mementos.original);
    });
    it('first version', function () {
      assert.equal('http://web.archive.org/web/19961022105458/http://www.apple.com/', mementos.first);
    });
    it('previous version', function () {
      assert.equal('http://web.archive.org/web/20120701173927/http://www.apple.com/', mementos.previous);
    });
    it('current version', function () {
      assert.equal('http://web.archive.org/web/20120701222624/http://www.apple.com/', mementos.current);
    });
    it('next version', function () {
      assert.equal('http://web.archive.org/web/20120701230230/http://www.apple.com/', mementos.next);
    });
    it('last version', function () {
      assert.equal('http://web.archive.org/web/20150826205227/http://www.apple.com/', mementos.last);
    });
  })
});
