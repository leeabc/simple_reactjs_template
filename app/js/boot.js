var $ = require('jquery');
var React = require('react');
var MainApp = React.createFactory(require("../js/components/Main.jsx"));

$(function(){
    React.render(MainApp(), document.getElementById("container"));
});