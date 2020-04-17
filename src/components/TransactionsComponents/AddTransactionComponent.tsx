import React from 'react';
import { TransactionTabsComponent } from '../TabsComponents/TransactionTabsComponent';
import Axios from 'axios';
import { Container, Form } from 'react-bootstrap';

export class AddTransactionComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            transactionid: 0,
            amount: 0.00,
            recipient: "",
            transactionDate: "",
            transactionType: 0
        }
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
            amount: this.state.amount,
            recipient: this.state.recipient,
            transactionDate: this.state.transactionDate,
            transactionType: this.state.transactionType
        };
        Axios.post(`http://localhost:8080/app/transactions/add-transactions`, transaction);
        alert(`You have added transaction of amount: ${this.state.amount}`);
        console.log(transaction);
    }
    render() {
        return (
            <div>
                <div id="hero-add-transaction-information-background">
                    <h1>Transaction Information: Add A Transaction</h1>
                    <hr></hr>
                    <TransactionTabsComponent />
                    <Container className="add-transaction-information-container">
                        <Form>
                            <label>
                                Amount: ($0.00):
                                </label>
                                <br></br>
                            <input type="number" className="add-transaction-information-input" onChange={(event: any) => this.handleAmountChange(event)} />
                            <br></br>
                            <label>
                                Transaction Recipient:
                                </label>
                                <br></br>
                            <input type="text" className="add-transaction-information-input" value={this.state.recipient} onChange={(event: any) => this.handleRecipientChange(event)} />

                            <br></br>

                            <label>
                                Transaction Date:
                                </label>
                                <br></br>
                            <input type="text" className="add-transaction-information-input" placeholder="MM-DD-YYYY" value={this.state.transactionDate} onChange={(event: any) => this.handleDateChange(event)} />
                            <br></br>

                            <label>
                                Transaction Type:
                                </label>
                                <br></br>
                            <input type="number" className="add-transaction-information-input" onChange={(event: any) => this.handleTransactionType(event)} />
                            <br></br><br></br>
                            <button className="btn-dark" onClick={(event: any) => this.handleSubmit(event)}>Submit</button>
                        </Form>
                    </Container>
                </div>
            </div>
        )
    }
}