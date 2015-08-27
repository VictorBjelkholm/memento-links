var attribute_map = {
  original: 'original',
  first: 'first memento',
  previous: 'prev memento',
  current: '"memento"',
  next: 'next memento',
  last: 'last memento'
}

function findMatchInArray(arr, to_match) {
  var to_return = null;
  arr.forEach(function(row) {
    if(row.indexOf(to_match) !== -1) {
      var matches = row.match(/\<(.*?)\>/);
      var submatch = matches[1];
      to_return = submatch;
      return;
    }
  });
  return to_return;
}


var mementolinks = function(string) {
  var to_return = {};
  var rows = string.split('", ');
  var keys = Object.keys(attribute_map);
  keys.forEach(function(key) {
    to_return[key] = findMatchInArray(rows, attribute_map[key]);

  })
  return to_return;
}

module.exports = mementolinks;
