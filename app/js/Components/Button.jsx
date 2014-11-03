var Button = React.createClass({
    render: function(){
        return (
            <button className="btn btn-primary">{this.props.text}</button>
            );
    }
});

module.exports = Button;