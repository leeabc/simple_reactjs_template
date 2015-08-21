import React from 'react';

export default class extends React.Component{
  render() {
    return (
      <div className="greeting">
        Hello, {this.props.name}!
      </div>
    );
  }
}