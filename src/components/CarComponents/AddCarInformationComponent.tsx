import React from 'react';
import Axios from 'axios';
import CarTabsComponent from '../TabsComponents/CarTabsComponent';
import { Container, Form } from 'react-bootstrap';

export class AddCarInformationComponent extends React.Component<any, any> {
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
        })
    }

    handleSubmit(event: any) {
        event.preventDefault();

        const car = {
            make: this.state.make,
            model: this.state.model,
            year: this.state.year,
            capacity: this.state.capacity,
            transmission: this.state.transmission,
            ac: this.state.ac
        };

        const url = "http://localhost:8080/app/cars/add-a-car";
        Axios.post(url, car);
        alert(`Added Car Information: ${this.state.make} ${this.state.model}`);
    }
    render() {
        return (
            <div>
                <div id="hero-add-repair-shop-information-background">
                    <h1>Car Information: Add a Car</h1>
                    <hr></hr>
                    <CarTabsComponent />
                    <br></br>
                    <Container className="add-car-information-container">
                        <Form>
                            <label>
                                Make:
                            </label>
                            <br></br>
                            <input type="text" className="add-car-information-input" placeholder="Enter Make" value={this.state.make} onChange={(event: any) => this.handleMakeChange(event)} />
                            <br></br>
                            <label>
                                Model:
                            </label>
                            <br></br>
                            <input type="text" className="add-car-information-input" placeholder="Enter Model" value={this.state.model} onChange={(event: any) => this.handleModelChange(event)} />
                            <br></br>
                            <label>
                                Year:
                            </label>
                            <br></br>
                            <input type="text" className="add-car-information-input" placeholder="Enter Year" value={this.state.year} onChange={(event: any) => this.handleYearChange(event)} />
                            <br></br>
                            <label>
                                Capacity:
                            </label>
                            <br></br>
                            <input type="number" className="add-car-information-input" placeholder="Enter Capacity" value={this.state.capacity} onChange={(event: any) => this.handleCapacityChange(event)} />
                            <br></br>
                            <label>
                                Transmission:
                            </label>
                            <br></br>
                            {/* <input type="text" placeholder="Transmission" value={this.state.transmission} onChange={(event: any) => this.handleTransmissionChange(event)} />\<select placeholder="AC" value={this.state.ac} onChange={(event: any) => this.handleACChange(event)}> */}
                            <select placeholder="Transmission" className="add-car-information-input" value={this.state.transmission} onChange={(event: any) => this.handleTransmissionChange(event)}>
                                <option className="add-car-option">Automatic</option>
                                <option className="add-car-option">Manual</option>
                            </select>
                            <br></br>
                            <label>
                                AC:
                        </label><br></br>
                            {/* <input type="text" placeholder="AC" value={this.state.ac} onChange={(event: any) => this.handleACChange(event)} /> */}
                            <select placeholder="AC" className="add-car-information-input" value={this.state.ac} onChange={(event: any) => this.handleACChange(event)}>
                                <option className="add-car-option">Yes</option>
                                <option className="add-car-option">No</option>
                            </select>
                            <br></br><br></br>
                            <button className="btn-dark" onClick={(event: any) => this.handleSubmit(event)}>Submit</button>
                        </Form>
                    </Container>
                </div>
            </div>
        )
    }
}