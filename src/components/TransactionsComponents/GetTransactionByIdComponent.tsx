import React from 'react';
import { TransactionTabsComponent } from '../TabsComponents/TransactionTabsComponent';
import { Table } from 'react-bootstrap';

export class GetTransactionByIdComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div id="hero-get-transaction-information-by-id-background">
                    <h1>Transaction Information: Get Transaction By ID</h1>
                    <hr></hr>
                    <TransactionTabsComponent />
                    <div className="get-transaction-information-by-id-split get-transaction-information-by-id-left">
                            <div className="get-transaction-information-by-id-centered">
                                <input type="number" placeholder="Enter Transaction ID Number" />
                                <br></br><br></br>
                                <button className="btn-dark">Submit</button>
                            </div>
                        </div>
                        <div className="get-transaction-information-by-id-split get-transaction-information-by-id-right">
                            <div className="get-transaction-information-by-id-centered">
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
        )
    }
}