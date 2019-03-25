import React, { Component } from 'react';

class Card extends Component {
    render(){
        return (
            <div className="Card">
                <img src={this.props.topCardImg} alt="card"></img>
            </div>
        );
    }
}

export default Card