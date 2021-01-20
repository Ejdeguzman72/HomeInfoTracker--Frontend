import React from 'react';
import CarTabsComponent from '../TabsComponents/CarTabsComponent';
import { Table } from 'react-bootstrap';
import Axios from 'axios';

export class GetAllCarsComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            carid: 0,
            make: "",
            model: "",
            year: "",
            capacity: 0,
            transmission: "",
            ac: "",
            cars: []
        };
    }

    async componentDidMount() {
        alert("You have retrieved all car information");
        const url = "http://localhost:8080/app/cars/all";

        Axios.get(url).then(payload => {
            this.setState({
                ...this.state,
                cars: payload.data.map((o: any) => {
                    return (
                        <tr key={o.carid}>
                            <th scope="row">{o.carid}</th>
                            <td>{o.make}</td>
                            <td>{o.model}</td>
                            <td>{o.year}</td>
                            <td>{o.capacity}</td>
                            <td>{o.transmission}</td>
                            <td>{o.ac}</td>
                        </tr>
                    )
                })
            })
        })

    }

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
                            <tbody>
                               {this.state.cars}
                            </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
        )
    }
}
