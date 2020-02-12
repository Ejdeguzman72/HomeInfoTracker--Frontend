import React from 'react';
import { any } from 'prop-types';
import { ContactTabsComponent } from '../TabsComponents/ContactTabsComponent';
import Axios from 'axios';

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
                <div id="margin-herp">
                    <div id="hero-delete-contact-information-background">
                        <h1>Contact Information: Delete Contact Information</h1>
                        <hr></hr>
                        <ContactTabsComponent />
                        <div className="form-row">
                            <div className="centered">
                                <input type="number" placeholder="Enter ID to be deleted" value={this.state.contactId} onChange={(event:any) => this.handleChange(event)} />
                            </div>
                        </div><br></br>
                        <div className="form-row">
                            <button className="btn-dark" onClick={(event: any) => this.handleSubmit(event)}>Delete Contact Item</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}