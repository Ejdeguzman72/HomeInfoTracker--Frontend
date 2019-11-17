import React from 'react';
import { ContactTabsComponent } from '../TabsComponents/ContactTabsComponent';

export class UpdateContactInformationComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div id="margin-hero">
                    <div id="hero-update-contact-information-background">
                        <h1>Contact Information: Update Contact Information</h1>
                        <hr></hr>
                        <ContactTabsComponent />
                    </div>
                </div>
            </div>
        )
    }
}