import React from 'react';
import { TransactionTabsComponent } from '../TabsComponents/TransactionTabsComponent';
import Axios from 'axios';

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
        Axios.put(`http://localhost:8080/app/transactions/transaction/${this.state.transactionId}`, transaction );
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
                        <div className="form-row">
                            <div className="form-group col-md-1 offset-4">
                                <label>
                                    Enter Transaction ID: 
                                </label>
                            </div>
                            <div className="form-group col-md-3">
                                <input type="number" placeholder="Enter Transation ID" onChange={(event: any) => this.handleTransactionIdChange(event)} />
                            </div>
                        </div>
                        <br></br>
                        <div className="form-row">
                            <div className="form-group col-md-1">
                                <label>
                                    Enter Amount ($0.00): 
                                </label>
                            </div>
                            <div className="form-group col-md-1">
                                <input type="number" placeholder="Enter Amount" onChange={(event: any) => this.handleAmountChange(event)} />
                            </div>
                        </div>
                        <br></br>
                        <div className="form-row">
                            <div className="form-group col-md-1">
                                <label>
                                    Transaction Recipient:
                                </label>
                            </div>
                            <div className="form-group col-md-2">
                                <input type="text" placeholder="Enter Recipient" value={this.state.recipient} onChange={(event: any) => this.handleRecipientChange(event)} />
                            </div>
                        </div>
                        <br></br>
                        <div className="form-row">
                            <div className="form-group col-md-1">
                                <label>
                                    Transaction Date (MM-DD-YYYY): 
                                </label>
                            </div>
                            <div className="form-group col-md-3">
                                <input type="text" placeholder="Enter Transaction Date" value={this.state.transactionDate} onChange={(event: any) => this.handleDateChange(event) }/>
                            </div>
                        </div>
                        <br></br>
                        <div className="form-row">
                            <div className="form-group col-md-1">
                                <label>
                                    Transaction Type:
                                </label>
                            </div>
                            <div className="form-group col-md-3">
                                <input type="text" placeholder="Enter Transasction Type" value={this.state.transactionType} onChange={(event: any) => this.handleTransactionType(event)} />
                            </div>
                        </div><br></br>
                            <button className="btn-dark" onClick={(event: any) => this.handleSubmit(event)}>Submit</button>
                </div>
            </div>
        )
    }
}