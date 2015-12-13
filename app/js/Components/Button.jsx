import React from 'react';
export default class extends React.Component{
	render(){
        return (
            <button onClick={this.props.onClickHandler} className="btn btn-primary">{this.props.text}</button>
            );
	}
}