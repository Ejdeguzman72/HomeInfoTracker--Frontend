import React from 'react';
import CarRecordsTabsComponent from '../TabsComponents/CarRecordsTabComponent';
import { Table } from 'react-bootstrap';
import Axios from 'axios';

export class GetAllCarRecords extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            carRecordId: 0,
            amount: 0,
            carJobId: 0,
            repairShopId: 0,
            repairShops: []
        };
    }

    async componentDidMount() {
        alert("You have retrieved all car record information!");
        const url = "http://localhost:8080/app/car-records/all";

        Axios.get(url).then(payload => {
            this.setState({
                ...this.state,
                repairShops: payload.data.map((o: any) => {
                    return (
                        <tr key={o.carRecordId}>
                            <th scope="row">{o.carRecordId}</th>
                            <th scope="row">{o.amount}</th>
                            <th scope="row">{o.repairShopId}</th>
                            <th scope="row">{o.carJobId}</th>
                        </tr>
                    )
                })
            })
        })
    }

    render() {
        return(
            <div>
                <div id="hero-get-all-car-record-information-background">
                    <h1>Car Record Information: Get All Car Records</h1>
                    <hr></hr>
                    <CarRecordsTabsComponent />
                    <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Amount</th>
                                <th>Car Job ID</th>
                                <th>Repair Shop ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.repairShops}
                            </tbody>
                            </Table>
                </div>
            </div>
        )
    }
}