import React from 'react';
import { CarTabsComponent } from '../TabsComponents/CarTabsComponent';
import Axios from 'axios';

export class DeleteCarInformationComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            carid: 0
        }
    }

    handleChange(event: any) {
        this.setState({
            carid: event.target.value
        });
    }

    handleSubmit(event: any) {
        event.preventDefault();
        alert(`Deleted car with id of ${this.state.carid}`);
        const url = `http://localhost:8080/app/cars//car/${this.state.carid}`;
        Axios.delete(url);
    }

    render() {
        return (
            <div>
                <div id="margin-hero">
                    <div id="hero-delete-car-information-background">
                        <h1>Car Information: Delete Car Information</h1>
                        <hr></hr>
                        <CarTabsComponent />
                        <div className="form-row">
                            <input type="number" placeholder="Enter ID to be deleted" value={this.state.carid} onChange={(event:any) => this.handleChange(event)}/>
                        </div><br></br>
                        <div className="form-row">
                            <button className="btn-dark" onClick={(event:any) => this.handleSubmit(event)}>Delete Car Information</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}