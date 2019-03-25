import React, { Component } from 'react';

class Card extends Component {
    render(){
        return (
            <div className="Card">
                <img src={this.props.img} alt="card"/>
            </div>
        );
    }
}

export default Card