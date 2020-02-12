import React from 'react';
import Axios from 'axios';
import { CarTabsComponent } from '../TabsComponents/CarTabsComponent';

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
                            {/* <input type="text" placeholder="Transmission" value={this.state.transmission} onChange={(event: any) => this.handleTransmissionChange(event)} />\<select placeholder="AC" value={this.state.ac} onChange={(event: any) => this.handleACChange(event)}> */}
                            <select  placeholder="Transmission" value={this.state.transmission} onChange={(event: any) => this.handleTransmissionChange(event)} />\<select placeholder="AC" value={this.state.ac} onChange={(event: any) => this.handleACChange(event)}> 
                                <option>Automatic</option>
                                <option>Manual</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-1">
                            <label>
                                AC
                            </label>
                        </div>
                        <div className="form-group col-md-3">
                            {/* <input type="text" placeholder="AC" value={this.state.ac} onChange={(event: any) => this.handleACChange(event)} /> */}
                            <select placeholder="AC" value={this.state.ac} onChange={(event: any) => this.handleACChange(event)}>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-1 offset-1">
                            <button className="btn-dark" onClick={(event: any) => this.handleSubmit(event)}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}