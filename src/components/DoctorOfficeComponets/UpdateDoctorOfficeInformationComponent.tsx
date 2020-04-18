import React from 'react';
import Axios from 'axios';
import { DoctorOfficeTabsComponent } from '../TabsComponents/DoctorOfficeTabsComponent';
import { Container, Form } from 'react-bootstrap';

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
                    <Container className="update-doctor-office-information-container">
                        <Form>

                            <label>
                                Enter Doctor Office ID:
                            </label>

                            <input type="number" className="doctor-office-info-input" value={this.state.doctorOfficeId} onChange={(event: any) => this.handleDoctorOfficeIdChange(event)} />

                            <br></br>

                            <label>
                                Doctor Office ID
                            </label>

                            <input type="text" className="doctor-office-info-input"  value={this.state.address} onChange={(event: any) => this.handleDoctorOfficeTypeIdChange(event)} /><br></br>

                            <label>
                                Doctor Name:
                            </label>

                            <input type="text" className="doctor-office-info-input" value={this.state.address} onChange={(event: any) => this.handleNameChange(event)} />
                            <br></br>
                            <label>
                                Address:
                            </label>

                            <input type="text" className="doctor-office-info-input"  value={this.state.address} onChange={(event: any) => this.handleAddressChange(event)} />
                            <br></br>
                            <label>
                                City
                            </label>

                            <input type="text" className="doctor-office-info-input"  value={this.state.city} onChange={(event: any) => this.handleCityChange(event)} />
                            <br></br>
                            <label>
                                State
                            </label>

                            <input type="text" className="doctor-office-info-input"  value={this.state.state} onChange={(event: any) => this.handleStateChange(event)} />
                            <br></br>
                            <label>
                                Zip Code:
                            </label>

                            <input type="text" className="doctor-office-info-input"  value={this.state.zip} onChange={(event: any) => this.handleZipChange(event)} />
                            <br></br><br></br>
                            <button className="btn-dark" onClick={(event: any) => this.handleSubmit(event)}>Submit</button>

                        </Form>
                    </Container>
                </div>
            </div>
        )
    }
}