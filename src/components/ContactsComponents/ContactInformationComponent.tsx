import React from 'react';
import { ContactTabsComponent } from '../TabsComponents/ContactTabsComponent';

export class ContactInfomrationComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div id="hero-contact-information-background">
                    <h1>Contact Information</h1>
                    <hr></hr>
                    <ContactTabsComponent />
                    <br></br>
                    <div id="contact-information-container">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-12 offset-6">
                                    <p id="contact-information-p-border">The following pertains to contact information for the user.
                                        Contact information includes name of contact, DOB, address,
                                        email, phone number, etc.
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}