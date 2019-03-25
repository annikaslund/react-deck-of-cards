import React, { Component } from 'react';
import axios from "axios";
import Card from "./Card";

class Table extends Component {
    render(){
        return (
            <div className="Table">
                <Card />
            </div>
        );
    }
}

export default Table