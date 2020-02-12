import React from 'react';
import { CarRecordsTabsComponent } from '../TabsComponents/CarRecordsTabComponent';
import Axios from 'axios';

export class DeleteCarRecordInformation extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            carRecordId: 0
        }
    }

    handleChange(event: any) {
        this.setState({
            carRecordId: event.target.value
        });
    }

    handleSubmit(event: any) {
        event.preventDefault();
        alert(`Deleted car record item of id ${this.state.carRecordId}`);
        const url = `http://localhost:8080/app/car-records/car-record/${this.state.carRecordId}`;
        Axios.delete(url);
    }
    
    render() {
        return(
            <div>
                <div id="hero-delete-car-record-information-background">
                    <h1>Car Record Information: Delete Car Record Information</h1>
                    <hr></hr>
                    <CarRecordsTabsComponent />
                    <div className="form-row">
                            <input type="number" placeholder="Enter ID to be deleted" onChange={(event: any) => this.handleChange(event)} />
                        </div><br></br>
                        <div className="form-row">
                            <button className="btn-dark" onClick={(event: any) => this.handleSubmit(event)}>Delete Car Record Information</button>
                        </div>
                </div>
            </div>
        )
    }
}