var $ = require('jquery'),
    backbone = require('backbone'),
    template = require('templates/world'),
    hbarsTemplate = require('templates/hello'),
    name = require("./foo").name;

console.log("foo's name is.....", name);
console.log("backbone version is", backbone.VERSION);

exports.app = {
  foo : "moar...",
  name : name,
  template : template,
  hbarsTemplate : hbarsTemplate
};