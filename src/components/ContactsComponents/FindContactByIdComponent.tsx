import React from 'react';
import ContactTabsComponent from '../TabsComponents/ContactTabsComponent';
import { Table, Container, Form, Button } from 'react-bootstrap';
import Axios from 'axios';

export class FindContactByIdComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            contactId: 0,
            firstname: "",
            lastname: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            phone: "",
            email: "",
            contact: []
        };
    }

    handleChange(event: any) {
        const value = event.target.value;
        this.setState({
            ...this.state,
            contactid: value
        });
    }

    handleSubmit() {
        const url = `http://localhost:8080/app/contact-book/contact/${this.state.contactid}`;
        Axios.get(url).then(payload => {
            this.setState({
                ...this.state,
                contact: (
                    <tr key={this.state.contactid}>
                        <th>{payload.data.contactid}</th>
                        <th>{payload.data.firstname}</th>
                        <th>{payload.data.lastname}</th>
                        <th>{payload.data.adrress}</th>
                        <th>{payload.data.city}</th>
                        <th>{payload.data.state}</th>
                        <th>{payload.data.zip}</th>
                        <th>{payload.data.phone}</th>
                        <th>{payload.data.email}</th>
                    </tr>
                )
            })
        })

        alert(`You have retrieved the contact with id of: ${this.state.contactid}`);
    }
    render() {
        return (
            <div>
                <div id="margin-hero">
                    <div id="hero-get-contact-information-by-id-background">
                        <h1>Contact Information: Find Contact By ID Number</h1>
                        <hr></hr>
                        <ContactTabsComponent />
                        <br></br>
                        <Container className="get-contact-info-by-id-container">
                            <Form>
                                <input className="get-contact-info-by-id-container-input"type="number" placeholder="Enter Contact ID Number" value={this.state.contactid} onChange={(event: any) => this.handleChange(event)} />
                                <br></br><br></br>
                                <Button variant="dark" size="lg" onClick={() => this.handleSubmit()}>Submit</Button>
                            </Form>
                        </Container>
                        <br></br>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>F.Name</th>
                                    <th>L.Name</th>
                                    <th>Address</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Zip</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.contact}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        )
    }
}