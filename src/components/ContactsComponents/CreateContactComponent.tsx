import React from 'react';
import { ContactTabsComponent } from '../TabsComponents/ContactTabsComponent';
import { Table } from 'react-bootstrap';

export class CreateContactComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div id="margin-hero">
                    <div id="hero-add-a-contact-information-background">
                            <h1>Contact Information: Create Contact</h1>
                            <hr></hr>
                            <ContactTabsComponent />
                            <div className="add-contact-information-by-id-split get-car-information-by-id-left">
                                    <div className="form-row">
                                        <input type="text" placeholder="Enter Last Name" />
                                    </div>
                                    <div className="form-row">
                                        <input type="text" placeholder="Enter Last Name" />
                                    </div>
                                    <div className="form-row">
                                        <input type="text" placeholder="Enter Address" />
                                    </div>
                                    <div className="form-row">
                                        <input type="text" placeholder="Enter City" />
                                    </div>
                                    <div className="form-row">
                                        <input type="text" placeholder="Enter State" />
                                    </div>
                                    <div className="form-row">
                                    <input type="text" placeholder="Enter Zip Code" />
                                    </div>
                                    <div className="form-row">
                                    <input type="text" placeholder="Enter Phone" />
                                    </div>
                                    <div className="form-row">
                                    <input type="text" placeholder="Enter Email" />
                                    </div><br></br>
                                <button className="btn-dark">Submit</button>
                        </div>
                        <div className="get-car-information-by-id-split get-car-information-by-id-right">
                            <div className="form-row">
                               <div className="form-group col-md-4">
                                   
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}