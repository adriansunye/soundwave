import React from 'react';

export class Input extends React.Component {
    render() {
        return (
            <input type={this.props.type} className="form-control" id={this.props.id}></input>
        );
    }
}