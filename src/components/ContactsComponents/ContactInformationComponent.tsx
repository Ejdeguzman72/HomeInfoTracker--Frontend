import React from 'react';
import { ContactTabsComponent } from '../TabsComponents/ContactTabsComponent';
import { Form } from 'react-bootstrap';

export class ContactInfomrationComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div id="hero-contact-information-background">
                    <h1>Contact Information</h1>
                    <hr></hr>
                    <ContactTabsComponent />
                    <br></br>
                    <Form className="contact-information-container">
                        <p>The following pertains to contact information for the user.
                        Contact information includes name of contact, DOB, address,
                        email, phone number, etc. Users are able to retrieve contact information,
                        enter new contact information, update contact information and delete contact
                        information.
                        </p>
                    </Form>
                </div>
            </div>
        )
    }
}