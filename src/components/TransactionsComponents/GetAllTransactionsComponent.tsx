import React from 'react';
import TransactionTabsComponent from '../TabsComponents/TransactionTabsComponent';
import { Table } from 'react-bootstrap';
import Axios from 'axios';

export class GetAllTransactionsComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            transactionId: 0,
            amount: 0,
            recipient: "",
            transactionDate: "",
            transactionType: 0,
            transactions: []
        };
    }

    async componentDidMount() {
        alert("You have retrieved all transaction information");
        const url = "http://localhost:8080/app/transactions/all";

        Axios.get(url).then(payload => {
            this.setState({
                ...this.state,
                transactions: payload.data.map((o: any) => {
                    return (
                        <tr key={o.transactionid}>
                            <th scope="row">{o.transactionid}</th>
                            <td>{o.amount}</td>
                            <td>{o.recipient}</td>
                            <td>{o.transactionDate}</td>
                            <td>{o.transactionType}</td>
                        </tr>
                    )
                })
            })
        })
    }

    render() {
        return(
            <div>
                <div id="hero-get-all-transaction-information-background">
                    <h1>Transaction Information: Get All Transactions</h1>
                    <hr></hr>
                    <TransactionTabsComponent />
                    <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Transaction ID</th>
                                <th>Amount</th>
                                <th>Recipient</th>
                                <th>Transaction Date</th>
                                <th>Transaction Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.transactions}
                            </tbody>
                            </Table>
                </div>
            </div>
        )
    }
}