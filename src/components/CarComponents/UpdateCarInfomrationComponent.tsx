import React from 'react';
import { CarTabsComponent } from '../TabsComponents/CarTabsComponent';
import Axios from 'axios';

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

    handleCarIdChange(event:any) {
        this.setState({
            carid: event.target.value
        });
    }

    handleMakeChange(event: any) {
        this.setState({
            make: event.target.value
        });
    }

    handleModelChange(event:any) {
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
                    <div className="form-row">
                        <div className="form-group col-md-1 offset-1">
                            <label>
                                Car ID:
                            </label>
                        </div>
                        <div className="form-group col-md-3">
                            <input type="number" placeholder="Enter ID No:" onChange={(event:any) => this.handleCarIdChange(event)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-1">
                            <label>
                                Make:
                            </label>
                        </div>
                        <div className="form-group col-md-3">
                            <input type="text" placeholder="Enter Make" value={this.state.make} onChange={(event: any) => this.handleMakeChange(event)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-1">
                            <label>
                                Model:
                            </label>
                        </div>
                        <div className="form-group col-md-3">
                            <input type="text" placeholder="Enter Model" value={this.state.model} onChange={(event: any) => this.handleModelChange(event)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-1">
                            <label>
                                Year:
                            </label>
                        </div>
                        <div className="form-group col-md-3">
                            <input type="text" placeholder="Enter Year" value={this.state.year} onChange={(event: any) => this.handleYearChange(event)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-1">
                            <label>
                                Capacity:
                            </label>
                        </div>
                        <div className="form-group col-md-3">
                            <input type="number" placeholder="Enter Capacity" value={this.state.capacity} onChange={(event: any) => this.handleCapacityChange(event)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-1">
                            <label>
                                Transmission:
                            </label>
                        </div>
                        <div className="form-group col-md-3">
                            <input type="text" placeholder="Transmission" value={this.state.transmission} onChange={(event: any) => this.handleTransmissionChange(event)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-1">
                            <label>
                                AC
                            </label>
                        </div>
                        <div className="form-group col-md-3">
                            <input type="text" placeholder="AC" value={this.state.ac} onChange={(event: any) => this.handleACChange(event)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-1 offset-1">
                            <button className="btn-dark" onClick={(event: any) => this.handleSubmit(event)}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}