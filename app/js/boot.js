import $ from 'jquery';
import React from 'react';

//component
import Main from './Components/Main.jsx'

$(()=>{
    React.render(<Main/>, document.getElementById("container"));
});