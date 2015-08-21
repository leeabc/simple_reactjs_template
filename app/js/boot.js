var $ = require('jquery');
var React = require('react');
//var MainApp = React.createFactory(require("../js/components/Main.jsx"));

var Greeting = require('./Components/Main.jsx');

$(function(){
    React.render(<Greeting/>, document.getElementById("container"));
});