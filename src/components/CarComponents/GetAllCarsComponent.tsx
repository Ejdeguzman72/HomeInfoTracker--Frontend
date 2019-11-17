import React from 'react';
import { CarTabsComponent } from '../TabsComponents/CarTabsComponent';
import { Table } from 'react-bootstrap';

export class GetAllCarsComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div id="margin-hero">
                    <div id="hero-get-all-car-information-background">
                        <h1>Car Information: Get All Cars</h1>
                        <hr></hr>
                        <CarTabsComponent />
                        <br></br>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Car ID No:</th>
                                <th>Make</th>
                                <th>Model</th>
                                <th>Year</th>
                                <th>Capacity</th>
                                <th>Transmission</th>
                                <th>AC</th>
                                </tr>
                            </thead>
                            {/* <tbody>
                                <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                            </tbody> */}
                            </Table>
                        </div>
                    </div>
                </div>
        )
    }
}
