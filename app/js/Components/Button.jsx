import React from 'react';
export default class extends React.Component{
	render(){
        return (
            <button className="btn btn-primary">{this.props.text}</button>
            );
	}
}