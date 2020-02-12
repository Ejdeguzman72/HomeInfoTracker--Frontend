import React from 'react';
import { CarRecordsTabsComponent } from '../TabsComponents/CarRecordsTabComponent';
import { Table } from 'react-bootstrap';
import Axios from 'axios';

export class GetCarRecordInformationByIdComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            carRecordId: 0,
            amount: 0,
            carJobId: 0,
            repairShopId: 0,
            carRecord: []
        };
    }

    handleChange(event: any) {
        const value = event.target.value;

        if (value == null) {
            
                alert(`cannot be null`)
            
        }
        this.setState({
            ...this.state,
            carRecordId: value
        });
    }

    handleSubmit() {
        alert(`You have retrieved the car record with id of ${this.state.carRecordId}`);
        const url = `http://localhost:8080/app/car-records/car-record/${this.state.carRecordId}`;
        Axios.get(url).then(payload => {
            this.setState({
                ...this.state,
                carRecord: (
                    <tr key = {this.state.carRecordId}>
                        <th>{payload.data.carRecordId}</th>
                        <th>{payload.data.amount}</th>
                        <th>{payload.data.carJobId}</th>
                        <th>{payload.data.repairShopId}</th>
                    </tr>
                )
            })
        }) 
    }
    render() {
        return(
            <div>
                <div id="hero-get-car-record-information-by-id-background">
                    <h1>Car Record Information: Get Car Record Information By ID</h1>
                    <hr></hr>
                    <CarRecordsTabsComponent />
                    <div className="get-car-record-information-by-id-split get-car-record-information-by-id-left">
                            <div className="get-car-record-information-by-id-centered">
                                <input type="number" placeholder="Enter Car ID Number" value={this.state.carRecordId} onChange={(event:any) => this.handleChange(event)}/>
                                <br></br><br></br>
                                <button className="btn-dark" onClick={() => this.handleSubmit()}>Submit</button>
                            </div>
                        </div>
                        <div className="get-car-record-information-by-id-split get-car-record-information-by-id-right">
                            <div className="get-car-record-information-by-id-centered">
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Amount</th>
                                                <th>Car Job</th>
                                                <th>Repair Shop</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.carRecord}
                                            </tbody>
                                    </Table>
                            </div>
                        </div>
                </div>
            </div>
        ) 
    }
}