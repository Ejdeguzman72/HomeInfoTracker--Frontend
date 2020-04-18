import React from 'react';
import Axios from 'axios';
import { MedicalRecordsTabsComponent } from '../TabsComponents/MedicalRecordsTabsComponent';
import { Container, Form } from 'react-bootstrap';

export class CreateMedicalRecordComponent extends React.Component<any, any> {
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

        const url = "http://localhost:8080/app/medical-records/add-medical-record";
        Axios.post(url, medicalRecord);
        alert(`Created Medical Record: ${this.state.amount}`);
    }
    render() {
        return (
            <div>
                <div id="hero-add-repair-shop-information-background">
                    <h1>Medical Record Information: Add a Medical Record</h1>
                    <hr></hr>
                    <MedicalRecordsTabsComponent />
                    <br></br>
                    <Container className="add-medical-record-container">
                        <Form>

                            <label>
                                Enter Doctor Office ID:
                            </label>

                            <input type="text" className="medical-record-input" onChange={(event: any) => this.handledoctorOfficeIdChange(event)} />
                            <br></br>
                            <label>
                                Enter Person ID:
                            </label>

                            <input type="text" className="medical-record-input" onChange={(event: any) => this.handlePersonIdChange(event)} />
                            <br></br>
                            <label>
                                Amount ($0.00):
                            </label>

                            <input type="text" className="medical-record-input" value={this.state.amount} onChange={(event: any) => this.handleAmountChange(event)} />
                            <br></br>
                            <label>
                                Doctor Name:
                            </label>

                            <input type="text" className="medical-record-input" onChange={(event: any) => this.handleDoctorNameChange(event)} />
                            <br></br>
                            <label>
                                Description:
                            </label>

                            <input type="text" className="medical-record-input" value={this.state.description} onChange={(event: any) => this.handleDescriptionChange(event)} />
                            <br></br><br></br>
                            <button className="btn-dark" onClick={(event: any) => this.handleSubmit(event)}>Submit</button>

                        </Form>
                    </Container>
                </div>
            </div>
        )
    }
}