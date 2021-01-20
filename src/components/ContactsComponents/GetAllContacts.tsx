import React from 'react';
import ContactTabsComponent from '../TabsComponents/ContactTabsComponent';
import { Table } from 'react-bootstrap';
import Axios from 'axios';

export class GetAllContactsComponent extends React.Component<any, any> {
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
            email: "",
            contacts: []
        };
    }

    async componentDidMount() {
        // alert("You have retrieved all contact information");
        const url = "http://localhost:8080/app/contact-book/all";
        // const config = {
        //     headers: {
        //         "Content-Type":  "application.json",
        //         authorization: localStorage.getItem("EJ-token"),
        //         "Access-Control-Allow-Methods": "*"
        //     }
        // }
        Axios.get(url).then(payload => {
            this.setState({
                ...this.state,
                contacts: payload.data.map((o: any) => {
                    return (
                        <tr key={o.contactid}>
                            <th scope="row">{o.contactid}</th>
                            <td>{o.firstname}</td>
                            <td>{o.lastname}</td>
                            <td>{o.address}</td>
                            <td>{o.city}</td>
                            <td>{o.state}</td>
                            <td>{o.zip}</td>
                            <td>{o.phone}</td>
                            <td>{o.email}</td>
                        </tr>
                    )
                })
            })
        })
    }
    
    render() {
        return (
            <div>
                <div id="margin-herp">
                    <div id="hero-get-all-contact-information-background">
                    <h1>Contact Information: Get All Contacts</h1>
                    <hr></hr>
                    <ContactTabsComponent />
                    <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Contact ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Zip Code</th>
                                <th>Phone</th>
                                <th>Email Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.contacts}
                            </tbody>
                            </Table>
                    </div>
                </div>
            </div>
        )
    }
}