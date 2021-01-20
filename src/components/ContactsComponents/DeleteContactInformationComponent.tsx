import React from 'react';
import { any } from 'prop-types';
import ContactTabsComponent from '../TabsComponents/ContactTabsComponent';
import Axios from 'axios';
import { Container, Form } from 'react-bootstrap';

export class DeleteContactInformationComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            contactId: 0
        }
    }

    handleChange(event: any) {
        this.setState({
            contactId: event.target.value
        });
    }

    handleSubmit(event: any) {
        event.preventDefault();
        alert(`Deleted transaction item with id of ${this.state.contactId}`);
        const url = `http://localhost:8080/app/contact-book/contact/${this.state.contactId}`;
        Axios.delete(url);
    }
    render() {
        return (
            <div>
                <div id="margin-hero">
                    <div id="hero-delete-contact-information-background">
                        <h1>Contact Information: Delete Contact Information</h1>
                        <hr></hr>
                        <ContactTabsComponent />
                        <br></br>
                        <Container className="delete-contact-information-container">
                            <Form>
                                <input type="number" className="delete-contact-information-input" placeholder="Enter ID to be deleted" onChange={(event: any) => this.handleChange(event)} />
                                <br></br><br></br>
                                <button className="btn-dark" onClick={(event: any) => this.handleSubmit(event)}>Delete Item</button>
                            </Form>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
}