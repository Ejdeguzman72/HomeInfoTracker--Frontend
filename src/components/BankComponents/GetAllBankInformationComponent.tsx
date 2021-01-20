import React from 'react';
import BankTabComponent from '../TabsComponents/BankTabsComponent';
import { Table } from 'react-bootstrap';
import Axios from 'axios';

export class GetAllBankInformationComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            bankId: 0,
            name: "",
            address: "",
            city: "",
            state: "",
            zipCode: "",
            banks: []
        };
    }

    async componentDidMount() {
        alert("You have retrieved all bank information");
        const url = "http://localhost:8080/app/banks/all";

        Axios.get(url).then(payload => {
            this.setState({
                ...this.state,
                banks: payload.data.map((o: any) => {
                    return (
                        <tr key={o.bankid}>
                            <th scope="row">{o.bankId}</th>
                            <td>{o.name}</td>
                            <td>{o.address}</td>
                            <td>{o.city}</td>
                            <td>{o.state}</td>
                            <td>{o.zipCode}</td>
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
                    <div id="hero-get-all-bank-information-background">
                        <h1>Bank Information: Get All Banks</h1>
                        <hr></hr>
                        {/* <BankTabsComponent /> */}
                        <br></br>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Bank ID No: </th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>State</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Zip Code</th>
                                </tr>
                            </thead>
                            <tbody>
                               {this.state.banks}
                            </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
        )
    }
}
