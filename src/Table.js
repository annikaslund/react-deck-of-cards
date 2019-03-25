import React, { Component } from 'react';
import axios from "axios";
import uuid from "uuid/v4";
import Card from "./Card";

class Table extends Component {
    constructor(props){
        super(props);
        this.state = {
            deckId: "",
            cardsImgs: [],
            error: null
        }
        this.handleClick = this.handleClick.bind(this);
    }

    // after mounting stage, makes API call to get a new deck and saves deck id. 
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

    // on click, makes API call for a card given the deckID. updates state with new card image 
    async handleClick(evt) {
        try {
            let newCardInfo = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=1`);
            let cardImg = newCardInfo.data.cards[0].image;
            this.setState({ 
                cardsImgs: [...this.state.cardsImgs, cardImg]
            });
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
                    {this.state.cardsImgs.length < 52 ? <button onClick={this.handleClick} >Gimme a card!</button> : null }
                    {this.state.cardsImgs.map(card => (
                        <Card key={ uuid() } img={card} />
                    ))}
                </div>
            );
        }
    }

export default Table