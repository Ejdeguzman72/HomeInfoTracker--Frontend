import React from 'react';
import { Form, Container } from 'react-bootstrap';
import ContactTabsComponent from '../TabsComponents/ContactTabsComponent';
import HomeTabComponent from '../TabsComponents/HomeTabComponent';
import ContactInformationTableComponent from './CardInformationTableComponent';

export class ContactInfomrationComponent extends React.Component<any,any> {
    render() {
        return (
            <div className="tab-center">
                <div id="hero-contact-information-background">
                    {/* <h1>Contact Information</h1> */}
                    <hr></hr>
                    <HomeTabComponent />
                    <ContactTabsComponent />
                    <br></br>
                    <div id="medical-record-info-container">
                        {/* <Form className="container-text"> */}
                            <p>The following pertains to contact information for the user.
                            Contact information includes name of contact, DOB, address,
                            email, phone number, etc. Users are able to retrieve contact information,
                            enter new contact information, update contact information and delete contact
                            information.
                            </p>
                        {/* </Form> */}
                        <ContactInformationTableComponent />
                    </div>
                </div>
            </div>
        )
    }
}