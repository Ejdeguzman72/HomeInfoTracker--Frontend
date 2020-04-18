import React from 'react';
import Axios from 'axios';
import { Table, Container, Form } from 'react-bootstrap';
import { DoctorOfficeTabsComponent } from '../TabsComponents/DoctorOfficeTabsComponent';

export class GetDoctorOfficeByIdComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            doctorOfficeId: 0,
            doctorOfficeType: 0,
            name: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            doctorOffice: []
        };
    }

    handleChange(event: any) {
        const value = event.target.value;
        this.setState({
            ...this.state,
            doctorOfficeId: value
        });
    }

    handleSubmit() {
        const url = `http://localhost:8080/app/doctor-offices/doctor-office/${this.state.doctorOfficeId}`;
        Axios.get(url).then(payload => {
            this.setState({
                ...this.state,
                repairShop: (
                    <tr key={this.state.doctorOfficeId}>
                        <th>{payload.data.doctorOfficeId}</th>
                        <th>{payload.data.doctorOfficeTypeId}</th>
                        <th>{payload.data.name}</th>
                        <th>{payload.data.address}</th>
                        <th>{payload.data.city}</th>
                        <th>{payload.data.state}</th>
                        <th>{payload.data.zip}</th>
                    </tr>
                )
            })
        })
        alert(`You have retrieved the repair shop with id of: ${this.state.doctorOffice}`);
    }
    render() {
        return (
            <div>
                <div id="hero-get-repair-shop-information-by-id-background">
                    <h1>Doctor Office Information: Get Doctor Office By ID Number</h1>
                    <hr></hr>
                    <DoctorOfficeTabsComponent />
                    <br></br>
                    <Container className="doctor-office-info-container">
                        <Form>
                            <label>
                                Enter Office ID No:
                            </label><br></br>
                            <input type="number" className="doctor-office-info-input" onChange={(event: any) => this.handleChange(event)}/>
                            <br></br><br></br>
                            <button className="btn-dark" onClick={() => this.handleSubmit()}>Submit</button>
                        </Form>
                    </Container>
                    <br></br>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Doctor Office ID No:</th>
                                <th>Doctor Office Type ID No:</th>
                                <th>Name </th>
                                <th>Address</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Zip</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.doctorOffice}
                        </tbody>
                    </Table>    
                </div>
            </div>
        )
    }
}