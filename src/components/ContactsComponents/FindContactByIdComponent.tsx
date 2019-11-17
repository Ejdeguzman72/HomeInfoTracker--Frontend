import React from 'react';
import { ContactTabsComponent } from '../TabsComponents/ContactTabsComponent';
import { Table } from 'react-bootstrap';

export class FindContactByIdComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div id="margin-herp">
                    <div id="hero-get-contact-information-by-id-background">
                        <h1>Contact Information: Find Contact By ID Number</h1>
                        <hr></hr>
                        <ContactTabsComponent />
                        <div className="get-car-information-by-id-split get-car-information-by-id-left">
                            <div className="get-car-information-by-id-centered">
                                <input type="number" placeholder="Enter Contact ID Number" />
                                <br></br><br></br>
                                <button className="btn-dark">Submit</button>
                            </div>
                        </div>
                        <div className="get-car-information-by-id-split get-car-information-by-id-right">
                            <div className="get-car-information-by-id-centered">
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>F.Name</th>
                                                <th>L.Name</th>
                                                <th>Address</th>
                                                <th>City</th>
                                                <th>State</th>
                                                <th>Zip</th>
                                                <th>Phone</th>
                                                <th>Email</th>
                                            </tr>
                                            </thead>
                                    </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}