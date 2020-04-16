import React from 'react';
import { ContactTabsComponent } from '../TabsComponents/ContactTabsComponent';
import { Table, Container, Form } from 'react-bootstrap';
import Axios from 'axios';

export class CreateContactComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            contactid: 0,
            firstname: "",
            lastname: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            phone: "",
            email: ""
        };
    }

    handleFirstNameChange(event: any) {
        this.setState({
            firstname: event.target.value
        });
    }

    handleLastNameChange(event: any) {
        this.setState({
            lastname: event.target.value
        });
    }

    handleAddressChange(event: any) {
        this.setState({
            address: event.target.value
        });
    }

    handleCityChange(event: any) {
        this.setState({
            city: event.target.value
        });
    }

    handleStateChange(event: any) {
        this.setState({
            state: event.target.value
        });
    }

    handleZipChange(event: any) {
        this.setState({
            zip: event.target.value
        });
    }

    handlePhoneChange(event: any) {
        this.setState({
            phone: event.target.value
        })
    }

    handleEmailChange(event: any) {
        this.setState({
            email: event.target.value
        })
    }

    handleSubmit(event: any) {
        event.preventDefault();

        const contact = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            phone: this.state.phone,
            email: this.state.email
        };

        console.log(contact);

        const url = ("http://localhost:8080/app/contact-book/contacts");
        Axios.post(url, contact);
        alert(`Created New Contact: ${this.state.firstname} ${this.state.lastname}`);
    }
    render() {
        return (
            <div>
                <div id="margin-hero">
                    <div id="hero-create-contact-information-background">
                        <h1>Contact Information: Create Contact</h1>
                        <hr></hr>
                        <ContactTabsComponent />
                        <br></br>
                        <Container className="create-contact-information-container">
                            <Form>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label>
                                            First Name:
                                </label>
                                        <input className="create-contact-information-input" type="text" placeholder="Enter First Name" value={this.state.firstname} onChange={(event: any) => this.handleFirstNameChange(event)} />
                                    </div>
                                    <div className="form-group col-md-4 offset-3">
                                        <label>
                                            Last Name:
                                </label>
                                        <input className="create-contact-information-input" type="text" placeholder="Enter Last Name" value={this.state.lastname} onChange={(event: any) => this.handleLastNameChange(event)} />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label>
                                            Address:
                                </label>
                                        <input className="create-contact-information-input" type="text" placeholder="Enter Address" value={this.state.address} onChange={(event: any) => this.handleAddressChange(event)} />
                                    </div>
                                    <div className="form-group col-md-4 offset-3">
                                        <label>
                                            City:
                                </label>
                                        <input className="create-contact-information-input" type="text" placeholder="Enter City" value={this.state.city} onChange={(event: any) => this.handleCityChange(event)} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label>
                                            State:
                                </label>
                                        <input className="create-contact-information-input" type="text" placeholder="Enter State" value={this.state.state} onChange={(event: any) => this.handleStateChange(event)} />
                                    </div>
                                    <div className="form-group col-md-4 offset-3">
                                        <label>
                                            Zip Code:
                                </label>
                                        <input className="create-contact-information-input" type="text" placeholder="Enter Zip Code" value={this.state.zip} onChange={(event: any) => this.handleZipChange(event)} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label>
                                            Phone Number:
                                </label>
                                        <input className="create-contact-information-input" type="text" placeholder="Enter Phone" value={this.state.phone} onChange={(event: any) => this.handlePhoneChange(event)} />
                                    </div>
                                    <div className="form-group col-md-4 offset-3">
                                        <label>
                                            Email Address:
                                </label>
                                        <input className="create-contact-information-input" type="text" placeholder="Enter Email" value={this.state.email} onChange={(event: any) => this.handleEmailChange(event)} />
                                    </div>
                                    <br></br><br></br>
                                </div>
                                <button className="btn-dark" onClick={(event: any) => this.handleSubmit(event)}>Submit</button>
                            </Form>
                        </Container>

                    </div>
                </div>
            </div>
        )
    }
}