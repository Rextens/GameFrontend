import axios from 'axios';
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class MainPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: "abc"
        }
    }
    
    onSubmit = () => {
        axios.get('/getText').then(result => {
            this.setState({text: result.data})
        })
    }

    render() {
        return (
            <div>
                Is this working?
                <Button onClick={this.onSubmit}>Press me</Button>
                {this.state.text}
            </div>
        );
    }
}

export default MainPage; 