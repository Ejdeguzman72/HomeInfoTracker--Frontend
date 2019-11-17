import React from 'react';
import { any } from 'prop-types';
import { ContactTabsComponent } from '../TabsComponents/ContactTabsComponent';

export class DeleteContactInformationComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div id="margin-herp">
                    <div id="hero-delete-contact-information-background">
                        <h1>Contact Information: Delete Contact Information</h1>
                        <hr></hr>
                        <ContactTabsComponent />
                        <div className="form-row">
                            <input type="number" placeholder="Enter ID to be deleted" />
                        </div><br></br>
                        <div className="form-row">
                            <button className="btn-dark">Delete Contact Item</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}