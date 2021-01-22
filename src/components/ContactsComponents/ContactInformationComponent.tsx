import React from 'react';
import { Form, Container } from 'react-bootstrap';
import ContactTabsComponent from '../TabsComponents/ContactTabsComponent';
import HomeTabComponent from '../TabsComponents/HomeTabComponent';
import ContactInformationTableComponent from './ContactInformationTableComponent';
import { Helmet } from 'react-helmet';

export class ContactInfomrationComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Contact Information</title>
                </Helmet>
                <div id="hero-contact-information-background">
                    <h1>Contact Information</h1>
                    <hr></hr>
                    <div className="tab-center">
                        <HomeTabComponent />
                        <ContactTabsComponent />
                        <br></br>
                        <ContactInformationTableComponent />
                    </div>
                </div>
            </div>
        )
    }
}