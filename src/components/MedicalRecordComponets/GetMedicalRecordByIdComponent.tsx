import React from 'react';
import { RepairShopTabsComponent } from '../TabsComponents/RepairShopTabsComponent';
import { thisExpression } from '@babel/types';
import Axios from 'axios';
import { Table } from 'react-bootstrap';
import { MedicalRecordsTabsComponent } from '../TabsComponents/MedicalRecordsTabsComponent';

export class GetMedicalRecordByIdComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            medicalRecordId: 0,
            doctorOfficeId: 0,
            personId: 0,
            amount: 0,
            doctorName: "",
            description: "",
            medicalRecord: []
        };
    }

    handleChange(event: any) {
        const value = event.target.value;
        this.setState({
            ...this.state,
            medicalRecordId: value
        });
    }

    handleSubmit() {
        const url = `http://localhost:8080/app/medical-records/medical-record/${this.state.medicalRecordId}`;
        Axios.get(url).then(payload => {
            this.setState({
                ...this.state,
                repairShop: (
                    <tr key={this.state.medicalRecordId}>
                        <th>{payload.data.medicalRecordId}</th>
                        <th>{payload.data.doctorOfficeId}</th>
                        <th>{payload.data.personId}</th>
                        <th>{payload.data.amount}</th>
                        <th>{payload.data.doctorName}</th>
                        <th>{payload.data.description}</th>
                    </tr>
                )
            })
        })
        alert(`You have retrieved the medical record with id of: ${this.state.repairShopId}`);
    }
    render() {
        return (
            <div>
                <div id="hero-get-repair-shop-information-by-id-background">
                    <h1>Medical Record Information: Get Medical Record By ID Number</h1>
                    <hr></hr>
                    <MedicalRecordsTabsComponent />
                    <input type="number" placeholder="Enter Medical Record ID Number" value={this.state.medicalRecordId} onChange={(event: any) => this.handleChange(event)}/>
                    <br></br><br></br>
                    <button className="btn-dark" onClick={() => this.handleSubmit()}>Submit</button>
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
                            {this.state.medicalRecord}
                        </tbody>
                    </Table>    
                </div>
            </div>
        )
    }
}