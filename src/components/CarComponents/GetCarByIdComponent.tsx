import React from 'react';
import CarTabsComponent from '../TabsComponents/CarTabsComponent';
import { Table, Container, Form, Button } from 'react-bootstrap';
import Axios from 'axios';

export class GetCarByIDComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            carid: 0,
            make: "",
            model: "",
            year: "",
            capacity: 0,
            transmission: "",
            ac: true,
            car: []
        };
    }

    handleChange(event: any) {
        const value = event.target.value;
        this.setState({
            ...this.state,
            carid: value
        });
    }

    handleSubmit() {
        alert(`You have retrieved the car with id of ${this.state.carid}`);
        const url = `http://localhost:8080/app/cars/car/${this.state.carid}`;
        Axios.get(url).then(payload => {
            this.setState({
                ...this.state,
                car: (
                    <tr key={this.state.carid}>
                        <th>{payload.data.carid}</th>
                        <th>{payload.data.make}</th>
                        <th>{payload.data.model}</th>
                        <th>{payload.data.year}</th>
                        <th>{payload.data.capacity}</th>
                        <th>{payload.data.transmission}</th>
                        <th>{payload.data.ac}</th>
                    </tr>
                )
            })
        })
    }

    render() {
        return (
            <div>
                <div id="margin-hero">
                    <div id="hero-get-car-information-by-id-background">
                        <h1>Car Information: Get Car Information By ID</h1>
                        <hr></hr>
                        <CarTabsComponent />
                        <br></br>
                        <Container className="get-car-information-by-id-container">
                            <Form>
                                <label>
                                    Enter Car ID No:
                                </label><br></br>
                                <input type="number" className="get-car-information-by-id-input" onChange={(event: any) => this.handleChange(event)} />
                                <br></br><br></br>
                                <Button variant="dark" size="lg" onClick={() => this.handleSubmit()}>Submit</Button>
                                <br></br>
                            </Form>
                        </Container>
                        <br></br>
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
                            <tbody>
                                {this.state.car}
                            </tbody>
                        </Table>
                    </div>
                </div>

            </div>

        )
    }
}