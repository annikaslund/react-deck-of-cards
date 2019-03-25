import React, { Component } from 'react';
import axios from "axios";
import Card from "./Card";

class Table extends Component {
    constructor(props){
        super(props);
        this.state = {
            deckId: "",
            card: []
        }

        // this.handleClick = this.handleClick.bind(this);
    }

    async componentDidMount(){
        let result = await axios.get("https://deckofcardsapi.com/api/deck/new/")
        this.setState({
            deckId: result.data.deck_id
        })
    }

    render(){
        return (
            <div className="Table">
                <button>Gimme a card!</button>
                <Card />
            </div>
        );
    }
}

export default Table