import React from 'react';
import { BankTabsComponent } from '../TabsComponents/BankTabsComponent';
import { Table } from 'react-bootstrap';
import Axios from 'axios';

export class GetBankByIDComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            bankid: 0,
            name: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            bank: []
        };
    }

    handleChange(event: any) {
        const value = event.target.value;
        this.setState({
            ...this.state,
            bankid: value
        });
    }

    handleSubmit() {
        const url = `http://localhost:8080/app/banks/bank/${this.state.bankid}`;
        alert(`You have retrieved the bank with id of ${this.state.bankid}`);
        Axios.get(url).then(payload => {
            this.setState({
                ...this.state,
                car: (
                    <tr key={this.state.bankid}>
                        <th>{payload.data.bankid}</th>
                        <th>{payload.data.name}</th>
                        <th>{payload.data.address}</th>
                        <th>{payload.data.city}</th>
                        <th>{payload.data.state}</th>
                        <th>{payload.data.zip}</th>
                    </tr>
                )
            })
        })
    }

    render() {
        return (
            <div>
                <div id="margin-hero">
                    <div id="hero-get-bank-information-by-id-background">
                        <h1>Bank Information: Get Bank Information By ID</h1>
                        <hr></hr>
                        <BankTabsComponent />
                                <input type="number" placeholder="Enter Bank ID Number" value={this.state.bankid} onChange={(event: any) => this.handleChange(event)}/>
                                <br></br><br></br>
                                <button className="btn-dark" onClick={() => this.handleSubmit()}>Submit</button>
                                <br></br>
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Address</th>
                                                <th>City</th>
                                                <th>State</th>
                                                <th>Zip Code</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.bank}
                                            </tbody>
                                    </Table>
                            </div>
                        </div>
                       
                            </div>
                       
        )
    }
}