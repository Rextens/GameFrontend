import axios from 'axios';
import {Redirect} from 'react-router-dom';
import { Button, Col, Container, Row, InputGroup, Form } from 'react-bootstrap';
import React, { Component } from 'react';
import publicIp from 'public-ip'
import os from 'os-browserify'

export default class Login extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            redirect: false
        }
    }

    componentDidMount = () => {
        //axios.get('/ipb').then(result => {
        //    console.log(result.data)
        //})
    }

    submit = (input) => {
        input.preventDefault();

        const data  = {
            login: input.target[0].value,
            password: input.target[1].value
        }

        axios.post('/testValue', data).then(result => {

            if(result.data)
            {
                const loggedData = { login: input.target[0].value }

                axios.post('/ip', loggedData).then(loggedResult => {
                    this.setState({redirect: result.data})
                })
            }
        })
    }
    
    render() {
        if(this.state.redirect)
        {
            return <Redirect to="/mainPage"/>
        }
        return (
            <div>
                <Form onSubmit={this.submit}>
                    <Form.Group className="mb-3">
                        <Form.Control placeholder="login"/>
                        <Form.Control placeholder="password"/>
                    </Form.Group>

                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        );
    }
}