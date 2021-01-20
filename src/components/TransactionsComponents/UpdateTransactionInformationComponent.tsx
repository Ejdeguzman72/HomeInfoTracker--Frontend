import React from 'react';
import TransactionTabsComponent from '../TabsComponents/TransactionTabsComponent';
import Axios from 'axios';
import { Container, Form } from 'react-bootstrap';

export class UpdateTransactionInformationComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            transactionId: 0,
            amount: 0,
            recipient: "",
            transactionDate: "",
            transactionType: ""
        }
    }

    handleTransactionIdChange(event: any) {
        this.setState({
            transactionId: event.target.value
        })
    }


    handleAmountChange(event: any) {
        this.setState({
            amount: event.target.value
        });
    }

    handleRecipientChange(event: any) {
        this.setState({
            recipient: event.target.value
        });
    }

    handleDateChange(event: any) {
        this.setState({
            transactionDate: event.target.value
        });
    }

    handleTransactionType(event: any) {
        this.setState({
            transactionType: event.target.value
        });
    }

    handleSubmit(event: any) {
        event.preventDefault();

        const transaction = {
            transactionId: this.state.transactionId,
            amount: this.state.amount,
            recipient: this.state.recipient,
            transactionDate: this.state.transactionDate,
            transactionType: this.state.transactionType
        };
        Axios.put(`http://localhost:8080/app/transactions/transaction/${this.state.transactionId}`, transaction);
        alert(`You have added transaction of amount: ${this.state.amount}`);
        console.log(transaction);
    }
    render() {
        return (
            <div>
                <div id="hero-update-transaction-information-background">
                    <h1>Transaction Information: Update Transaction Information</h1>
                    <hr></hr>
                    <TransactionTabsComponent />
                    <Container className="update-transaction-information-container">
                        <Form>
                            <label>
                                Enter Transaction ID:
                                </label>
                            <br></br>
                            <input type="number" className="update-transaction-information-input" onChange={(event: any) => this.handleTransactionIdChange(event)} />

                            <br></br>

                            <label>
                                Enter Amount ($0.00):
                                </label>
                                <br></br>
                            <input type="number" className="update-transaction-information-input" onChange={(event: any) => this.handleAmountChange(event)} />

                            <br></br>

                            <label>
                                Transaction Recipient:
                                </label>
                                <br></br>
                            <input type="text" className="update-transaction-information-input" value={this.state.recipient} onChange={(event: any) => this.handleRecipientChange(event)} />

                            <br></br>

                            <label>
                                Transaction Date (MM-DD-YYYY):
                                </label>
                                <br></br>
                            <input type="text" className="update-transaction-information-input" value={this.state.transactionDate} onChange={(event: any) => this.handleDateChange(event)} />

                            <br></br>

                            <label>
                                Transaction Type:
                                </label>
                                <br></br>
                            <input type="text" className="update-transaction-information-input" value={this.state.transactionType} onChange={(event: any) => this.handleTransactionType(event)} />
                            <br></br><br></br>
                            <button className="btn-dark" onClick={(event: any) => this.handleSubmit(event)}>Submit</button>
                        </Form>
                    </Container>
                </div>
            </div>
        )
    }
}