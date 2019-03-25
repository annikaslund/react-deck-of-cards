import React, { Component } from 'react';
import axios from "axios";
import Card from "./Card";

class Table extends Component {
    constructor(props){
        super(props);
        this.state = {
            deckId: "",
            cardsImgs: [],
            topCardImg: "",
            error: null
        }
        this.handleClick = this.handleClick.bind(this);
    }

    async componentDidMount(){
        try {
            let result = await axios.get("https://deckofcardsapi.com/api/deck/new/")
            this.setState({
                deckId: result.data.deck_id
            })
        } catch (err) {
            this.setState({
                error: "not a valid request."
            })
        }
    }

    async handleClick(evt) {
        //evt.preventDefault(); // don't need for non submit?
        try {
            let newCardInfo = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=1`);
            let cardImg = newCardInfo.data.cards[0].image;
            this.setState({ 
                cardsImgs: [...this.state.cardsImgs, cardImg],
                topCardImg: cardImg
            })
        } catch (err) {
            this.setState({
                error: "not a valid request."
            })
        }    
    }

    render(){
        return (
            <div className="Table">
                <p>{this.state.error}</p>
                <button onClick={this.handleClick} >Gimme a card!</button>
                <Card topCardImg={this.state.topCardImg}/>
            </div>
        );
    }
}

export default Table