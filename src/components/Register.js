import React, { Component } from 'react';
import { Button, Col, Container, Row, InputGroup, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    submit = (input) => {
        input.preventDefault();

        const loginData = {
            login: input.target[0].value,
            password: input.target[1].value,
            email: input.target[2].value
        }

        axios.post('/testPost', loginData).then(result =>{
            
        })

        console.log()
    }

    render() {
        return (
            <Container fluid={true}>
                <Row noGutters={true}>
                    <Col>
                        Hewwo :3 OwO
                        <Form onSubmit={this.submit}>
                            <Form.Group className="mb-3">
                                <Form.Control placeholder="login"/>
                                <Form.Control placeholder="password"/>
                                <Form.Control placeholder="email"/>
                            </Form.Group>

                            <Button type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Register;