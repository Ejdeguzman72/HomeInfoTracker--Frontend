import React from 'react';
import CarTabsComponent from '../TabsComponents/CarTabsComponent';
import Axios from 'axios';
import { Container, Form } from 'react-bootstrap';

export class UpdateCarInformationComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            carid: 0,
            make: "",
            model: "",
            year: "",
            capacity: 0,
            transmission: "",
            AC: ""
        };
    }

    handleCarIdChange(event: any) {
        this.setState({
            carid: event.target.value
        });
    }

    handleMakeChange(event: any) {
        this.setState({
            make: event.target.value
        });
    }

    handleModelChange(event: any) {
        this.setState({
            model: event.target.value
        });
    }

    handleYearChange(event: any) {
        this.setState({
            year: event.target.value
        });
    }

    handleCapacityChange(event: any) {
        this.setState({
            capacity: event.target.value
        });
    }

    handleTransmissionChange(event: any) {
        this.setState({
            transmission: event.target.value
        });
    }

    handleACChange(event: any) {
        this.setState({
            ac: event.target.value
        });
    }

    handleSubmit(event: any) {
        event.preventDefault();

        const car = {
            carid: this.state.carid,
            make: this.state.make,
            model: this.state.model,
            year: this.state.year,
            capacity: this.state.capacity,
            transmission: this.state.transmission,
            ac: this.state.ac
        }

        const url = "http://localhost:8080/app/cars/update-car";
        Axios.put(url, car);
        alert(`Updated Car Information: ${this.state.carid}: ${this.state.make} ${this.state.model}`)
    }

    render() {
        return (
            <div>
                <div id="margin-hero">
                    <div id="hero-update-car-information-background">
                        <h1>Car Information: Update Car Information</h1>
                        <hr></hr>
                        <CarTabsComponent />
                        <br></br>
                        <Container className="update-car-information-container">
                            <Form>

                                <label>
                                    Car ID:
                            </label>
                            <br></br>
                                <input type="number" className="update-car-information-center-input" onChange={(event: any) => this.handleCarIdChange(event)} />
                                <br></br>
                                <label id="left-label">
                                    Make:
                            </label>
                                <input type="text" className="update-car-information-left-input" value={this.state.make} onChange={(event: any) => this.handleMakeChange(event)} />
                                <label>
                                    Model:
                            </label>
                                <input type="text" className="update-car-information-right-input" value={this.state.model} onChange={(event: any) => this.handleModelChange(event)} />
                                <br></br>

                                <label>
                                    Year:
                            </label>
                            <br></br>
                                <input type="text" className="update-car-information-input" value={this.state.year} onChange={(event: any) => this.handleYearChange(event)} />
                                <br></br>
                                <label>
                                    Capacity:
                            </label>
                            <br></br>
                                <input type="number" className="update-car-information-input" value={this.state.capacity} onChange={(event: any) => this.handleCapacityChange(event)} />
                                <br></br>
                                <label>
                                    Transmission:
                            </label>
                            <br></br>
                                <input type="text" value={this.state.transmission} className="update-car-information-input" onChange={(event: any) => this.handleTransmissionChange(event)} />
                                <br></br>
                                <label>
                                    AC
                            </label>
                            <br></br>
                                <input type="text" className="update-car-information-input"value={this.state.ac} onChange={(event: any) => this.handleACChange(event)} />
                                <br></br><br></br>
                                <button className="btn-dark" onClick={(event: any) => this.handleSubmit(event)}>Submit</button>

                            </Form>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
}