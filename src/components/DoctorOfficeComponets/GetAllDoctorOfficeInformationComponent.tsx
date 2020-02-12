import React from 'react';
import { MedicalRecordsTabsComponent } from '../TabsComponents/MedicalRecordsTabsComponent';
import { Table } from 'react-bootstrap';
import Axios from 'axios';
import { DoctorOfficeTabsComponent } from '../TabsComponents/DoctorOfficeTabsComponent';

export class GetAllDoctorOfficeInformationComponent extends React.Component<any, any> {
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
            doctorOffices: []
        };
    }

    async componentDidMount() {
        alert("You have retrieved all medical record information");
        const url = "http://localhost:8080/app/doctor-offices/all";
        
        Axios.get(url).then(payload => {
            this.setState({
                ...this.state,
                cars: payload.data.map((o: any) => {
                    return (
                        <tr key={o.doctorOfficeId}>
                            <th scope="row">{o.doctorOfficeId}</th>
                            <td>{o.doctorOfficeType}</td>
                            <td>{o.name}</td>
                            <td>{o.address}</td>
                            <td>{o.city}</td>
                            <td>{o.state}</td>
                            <td>{o.zip}</td>
                        </tr>
                    )
                })
            })
        })

    }

    render() {
        return (
            <div>
                <div id="margin-hero">
                    <div id="hero-get-all-car-information-background">
                        <h1>Doctor Office: Get All Doctor Office Information</h1>
                        <hr></hr>
                        <DoctorOfficeTabsComponent />
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
                               {this.state.doctorOffices}
                            </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
        )
    }
}
