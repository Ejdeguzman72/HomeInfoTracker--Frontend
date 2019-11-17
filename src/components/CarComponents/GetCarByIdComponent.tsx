import React from 'react';
import { CarTabsComponent } from '../TabsComponents/CarTabsComponent';
import { Table } from 'react-bootstrap';

export class GetCarByIDComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div id="margin-hero">
                    <div id="hero-get-car-information-by-id-background">
                        <h1>Car Information: Get Car Information By ID</h1>
                        <hr></hr>
                        <CarTabsComponent />
                        <div className="get-car-information-by-id-split get-car-information-by-id-left">
                            <div className="get-car-information-by-id-centered">
                                <input type="number" placeholder="Enter Car ID Number" />
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
                                                <th>Make</th>
                                                <th>Model</th>
                                                <th>Year</th>
                                                <th>Capacity</th>
                                                <th>Transmission</th>
                                                <th>AC</th>
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