module.exports = {

// the key is used as a regex, and the value is the page to which
// it maps

  // base level pages
  '^/$':         'home',
  '^/food$':     'food',
  '^/notes$':    'notes',
  '^/contact$':  'contact',

  // post-level pages
  'recipes.*':   'food',
  'notes.*':     'notes',
}