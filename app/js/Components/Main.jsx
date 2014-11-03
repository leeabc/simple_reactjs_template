var Button = React.createFactory( require("./Button.jsx") );
var Main = React.createClass({

    render: function(){
        return (
            <Button text="Hello World"></Button>
            );
    }

    });

module.exports = Main;