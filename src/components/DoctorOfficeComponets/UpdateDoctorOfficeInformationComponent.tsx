import React from 'react';
import Axios from 'axios';
import { DoctorOfficeTabsComponent } from '../TabsComponents/DoctorOfficeTabsComponent';

export class UpdateDoctorOfficeInformationComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            doctorOfficeId: 0,
            doctorOfficeType: 0,
            name: "",
            address: "",
            city: "",
            state: "",
            zip: ""
        };
    }

   handleDoctorOfficeIdChange(event: any) {
       this.setState({
           doctorOfficeId: event.target.value
       });
   }

   handleDoctorOfficeTypeIdChange(event: any) {
       this.setState({
           doctorOfficeTypeId: event.target.value
       });
   }

   handleNameChange(event: any) {
       this.setState({
           name: event.target.value
       });
   }

   handleAddressChange(event: any) {
       this.setState({
           address: event.target.value
       });
   }

   handleCityChange(event: any) {
       this.setState({
           city: event.target.value
       });
   }

   handleStateChange(event: any) {
       this.setState({
           state: event.target.event
       });
   }

   handleZipChange(event: any) {
       this.setState({
           zip: event.target.value
       });
   }

    handleSubmit(event: any) {
        event.preventDefault();

        const doctorOffice = {
            doctorOfficeId: this.state.doctorOfficeId,
            doctorOfficeTypeId: this.state.doctorOfficeTypeId,
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        };

        const url = "http://localhost:8080/app/doctor-offices/add-a-doctor-office";
        Axios.post(url, doctorOffice);
        alert(`Created Doctor Office: ${this.state.name}`);
    }
    render() {
        return (
            <div>
                <div id="hero-add-repair-shop-information-background">
                    <h1>Doctor Office Information: Update a Doctor Office</h1>
                    <hr></hr>
                    <DoctorOfficeTabsComponent />
                    <br></br>
                    <div className="form-row">
                        <div className="form-group col-md-1 offset-2">
                            <label>
                                Enter Doctor Office ID:
                            </label>
                        </div>
                        <div className="form-group col-md-3">
                            <input type="number" placeholder="Enter Doctor Office ID" value = {this.state.doctorOfficeId} onChange={(event:any) => this.handleDoctorOfficeIdChange(event)} />
                        </div>
                    </div>
                    <br></br>
                    <div className="form-row">
                        <div className="form-group col-md-1">
                            <label>
                                Doctor Office ID
                            </label>
                        </div>
                        <div className="form-group col-md-3">
                            <input type="text" placeholder="Enter Doctor Office Type ID" value={this.state.address} onChange={(event: any) => this.handleDoctorOfficeTypeIdChange(event)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-1">
                            <label>
                                Doctor Name:
                            </label>
                        </div>
                        <div className="form-group col-md-3">
                            <input type="text" placeholder="Enter Name" value={this.state.address} onChange={(event: any) => this.handleNameChange(event)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-1">
                            <label>
                                Address:
                            </label>
                        </div>
                        <div className="form-group col-md-3">
                            <input type="text" placeholder="Enter Address" value={this.state.address} onChange={(event: any) => this.handleAddressChange(event)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-1">
                            <label>
                                City
                            </label>
                        </div>
                        <div className="form-group col-md-3">
                            <input type="text" placeholder="Enter City" value={this.state.city} onChange={(event: any) => this.handleCityChange(event)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-1">
                            <label>
                                State
                            </label>
                        </div>
                        <div className="form-group col-md-3">
                            <input type="text" placeholder="Enter State" value={this.state.state} onChange={(event: any) => this.handleStateChange(event)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-1">
                            <label>
                                Zip Code:
                            </label>
                        </div>
                        <div className="form-group col-md-3">
                            <input type="text" placeholder="Enter Zip Code" value={this.state.zip} onChange={(event: any) => this.handleZipChange(event)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-3 offset-1">
                            <button className="btn-dark" onClick={(event: any) => this.handleSubmit(event)}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}