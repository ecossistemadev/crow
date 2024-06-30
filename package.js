// package metadata file for Meteor.js

/* eslint-env meteor */

Package.describe({
  name: 'ecossistemadev:crow', // https://atmospherejs.com/ecossistemadev/crow
  summary: 'The most popular front-end framework for developing responsive, mobile first projects on the web.',
  version: '5.3.3',
  git: 'https://github.com/ecossistemadev/crow.git'
})

Package.onUse(api => {
  api.versionsFrom('METEOR@1.0')
  api.addFiles([
    'dist/css/crow.css',
    'dist/js/crow.js'
  ], 'client')
})
