import React from 'react';
import Axios from 'axios';
import { MedicalRecordsTabsComponent } from '../TabsComponents/MedicalRecordsTabsComponent';

export class UpdatedMedicalRecordInformationComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            medicalRecordId: 0,
            doctorOfficeId: 0,
            personId: 0,
            amount: 0,
            doctorName: "",
            description: ""
        };
    }

    handleMedicalRecordIdChange(event: any) {
        this.setState({
            medicalRecordId: event.target.value
        });
    }

    handledoctorOfficeIdChange(event: any) {
        this.setState({
            doctorOfficeId: event.target.value
        });
    }

    handlePersonIdChange(event: any) {
        this.setState({
            personId: event.target.value
        });
    }

    handleAmountChange(event: any) {
        this.setState({
            amount: event.target.value
        });
    }
    
    handleDoctorNameChange(event: any) {
        this.setState({
            doctorName: event.target.value
        });
    }

    handleDescriptionChange(event: any) {
        this.setState({
            description: event.target.value
        });
    }

    handleSubmit(event: any) {
        event.preventDefault();

        const medicalRecord = {
            medicalRecordId: this.state.medicalRecordId,
            doctorOfficeId: this.state.doctorOfficeId,
            personId: this.state.personId,
            amount: this.state.amount,
            doctorName: this.state.doctorName,
            description: this.state.description
        };

        const url = `http://localhost:8080/app/medical-records/medical-record/${this.state.medicalRecordId}`;
        Axios.put(url, medicalRecord);
        alert(`Updated Medical Record: ${this.state.amount}`);
    }
    render() {
        return (
            <div>
                <div id="hero-add-repair-shop-information-background">
                    <h1>Medical Record Information: Update a Medical Record</h1>
                    <hr></hr>
                    <MedicalRecordsTabsComponent />
                    <br></br>
                    <div className="form-row">
                        <div className="form-group col-md-1 offset-1">
                            <label>
                                Enter Record ID:
                            </label>
                        </div>
                        <div className="form-group col-md-3">
                            <input type="number" placeholder="Enter Record ID No" value={this.state.medicalRecordId} onChange={(event: any) => this.handleMedicalRecordIdChange(event)} />
                        </div>
                    </div>
                    <br></br>
                    <div className="form-row">
                        <div className="form-group col-md-1">
                            <label>
                                Enter Doctor Office ID:
                            </label>
                        </div>
                        <div className="form-group col-md-3">
                            <input type="text" placeholder="Enter Doctor Office ID " onChange={(event: any) => this.handledoctorOfficeIdChange(event)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-1">
                            <label>
                                Enter Person ID:
                            </label>
                        </div>
                        <div className="form-group col-md-3">
                            <input type="text" placeholder="Enter Person ID " onChange={(event: any) => this.handlePersonIdChange(event)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-1">
                            <label>
                                Amount ($0.00):
                            </label>
                        </div>
                        <div className="form-group col-md-3">
                            <input type="text" placeholder="Enter Amount" value={this.state.amount} onChange={(event: any) => this.handleAmountChange(event)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-1">
                            <label>
                                Doctor Name:
                            </label>
                        </div>
                        <div className="form-group col-md-3">
                            <input type="text" placeholder="Enter Doctor Name" value={this.state.doctorName} onChange={(event: any) => this.handleDoctorNameChange(event)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-1">
                            <label>
                                Description: 
                            </label>
                        </div>
                        <div className="form-group col-md-3">
                            <input type="text" placeholder="Enter Description" value={this.state.description} onChange={(event: any) => this.handleDescriptionChange(event)} />
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