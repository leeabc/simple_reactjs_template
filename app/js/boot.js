var MainApp = React.createFactory(require("../js/Components/Main.jsx"));

$(function(){
    React.render(MainApp(), document.getElementById("container"));
});