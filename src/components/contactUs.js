import React from 'react';
import * as emailjs from 'emailjs-com';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Col, Row } from "react-bootstrap"

class ContactUs extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            last: '',
            email: '',
            cel: ''
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const { name, last, email, cel } = this.state;
        const templateParams = {
            from_name: name + " " + last,
            from_email: email,
            to_name: 'Elon Musk',
            message_html: cel,
        };
        emailjs.send(
            'service_tfa8kea',
            'template_beaqtw2',
            templateParams,
            'user_qx07GZBJtX83RY6mPKG1N'
        )
        this.resetForm();
        alert('Your message has been sent successfully. We will contact you soon.');
        window.location.reload(false);
    };
    
    resetForm() {
        //document.getElementById("contact-form").reset();
        this.setState({
            name: '',
            last: '',
            email: '',
            cel: '',
        });
    }
    
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    
    render() {
        const { name, last, email, cel } = this.state;
    
        return (
            <Form className="contact-form" id="contact-form" onSubmit={this.handleSubmit}>
            <Row>
            <input type="hidden" name="contact_number" />
                <Col>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First name" id="name" required name="name" value={name} onChange={this.handleChange}/>
                </Col>
                <Col>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last name" id="last" required name="last" value={last} onChange={this.handleChange}/>
                </Col>
            </Row>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" id="email" placeholder="name@example.com" required name="email" value={email} onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Telephone</Form.Label>
                <Form.Control placeholder="+52 (222) 123456789" id="cel" required name="cel" value={cel} onChange={this.handleChange}/>
            </Form.Group>
            <Button variant="outline-secondary" id="form-submit" type="submit" size="lg" block>
                Send
            </Button>
            <div id="msgSubmit" className="h3 text-center hidden"></div>
        </Form>
        );
    }
}

export default ContactUs