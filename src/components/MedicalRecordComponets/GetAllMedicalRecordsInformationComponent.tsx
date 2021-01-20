import React from 'react';
import MedicalRecordsTabsComponent from '../TabsComponents/MedicalRecordsTabsComponent';
import { Table } from 'react-bootstrap';
import Axios from 'axios';

export class GetAllMedicalRecordsComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            medicalRecordid: 0,
            doctorOfficeid: 0,
            personid: 0,
            amount: 0,
            doctorName: "",
            description: "",
            medicalRecords: []
        };
    }

    async componentDidMount() {
        alert("You have retrieved all medical record information");
        const url = "http://localhost:8080/app/medical-records/all";
        
        Axios.get(url).then(payload => {
            this.setState({
                ...this.state,
                cars: payload.data.map((o: any) => {
                    return (
                        <tr key={o.medicalRecordid}>
                            <th scope="row">{o.medicalRecordid}</th>
                            <td>{o.doctorOfficeid}</td>
                            <td>{o.personid}</td>
                            <td>{o.amount}</td>
                            <td>{o.doctorName}</td>
                            <td>{o.description}</td>
                            <td>{o.ac}</td>
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
                        <h1>Medical Information: Get All Medical records</h1>
                        <hr></hr>
                        <MedicalRecordsTabsComponent />
                        <br></br>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Medical Record ID No:</th>
                                <th>Doctor Office ID No:</th>
                                <th>Person ID No:</th>
                                <th>Amount</th>
                                <th>Doctor Name</th>
                                <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                               {this.state.medicalRecords}
                            </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
        )
    }
}
