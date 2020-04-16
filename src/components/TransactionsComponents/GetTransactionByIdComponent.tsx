import React from 'react';
import { TransactionTabsComponent } from '../TabsComponents/TransactionTabsComponent';
import { Table, Container, Form, Button } from 'react-bootstrap';
import Axios from 'axios';

export class GetTransactionByIdComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            transactionid: 0,
            amount: 0,
            recipient: "",
            trasactionDate: "",
            transactionType: "",
            transaction: []
        };
    }

    handleChange(event: any) {
        const value = event.target.value;
        this.setState({
            ...this.state,
            transactionid: value
        });
    }

    handlesubmit() {
        alert(`You have retrieved the transaction with id of ${this.state.transactionid}`);
        const url = `http://localhost:8080/app/transactions/transaction/${this.state.transactionid}`;
        Axios.get(url).then(payload => {
            this.setState({
                ...this.state,
                transaction: (
                    <tr key={this.state.transactionid}>
                        <th>{payload.data.transactionid}</th>
                        <th>{payload.data.amount}</th>
                        <th>{payload.data.recipient}</th>
                        <th>{payload.data.transactionDate}</th>
                        <th>{payload.data.transactionType}</th>
                    </tr>
                )
            })
        })
    }
    render() {
        return (
            <div>
                <div id="hero-get-transaction-information-by-id-background">
                    <h1>Transaction Information: Get Transaction By ID</h1>
                    <hr></hr>
                    <TransactionTabsComponent />
                    <Container className="get-transaction-by-id-container">
                        <Form>
                            <label>Enter Transaction ID Number: </label><br></br>
                            <input type="number" className="get-transaction-by-id-input" onChange={(event: any) => this.handleChange(event)} />
                            <br></br><br></br>
                            <Button variant="dark" size="lg" onClick={() => this.handlesubmit()}>Submit</Button>
                        </Form>
                    </Container>
                    <br></br>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Amount</th>
                                <th>Recipient</th>
                                <th>Date</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.transaction}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}