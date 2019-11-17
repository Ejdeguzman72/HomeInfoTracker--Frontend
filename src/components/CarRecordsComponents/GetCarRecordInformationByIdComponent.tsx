import React from 'react';
import { CarRecordsTabsComponent } from '../TabsComponents/CarRecordsTabComponent';
import { Table } from 'react-bootstrap';

export class GetCarRecordInformationByIdComponent extends React.Component<any, any> {
    render() {
        return(
            <div>
                <div id="hero-get-car-record-information-by-id-background">
                    <h1>Car Record Information: Get Car Record Information By ID</h1>
                    <hr></hr>
                    <CarRecordsTabsComponent />
                    <div className="get-car-record-information-by-id-split get-car-record-information-by-id-left">
                            <div className="get-car-record-information-by-id-centered">
                                <input type="number" placeholder="Enter Car ID Number" />
                                <br></br><br></br>
                                <button className="btn-dark">Submit</button>
                            </div>
                        </div>
                        <div className="get-car-record-information-by-id-split get-car-record-information-by-id-right">
                            <div className="get-car-record-information-by-id-centered">
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Amount</th>
                                                <th>Car Job</th>
                                                <th>Repair Shop</th>
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