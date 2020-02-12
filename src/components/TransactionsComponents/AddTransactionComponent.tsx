import React from 'react';
import { TransactionTabsComponent } from '../TabsComponents/TransactionTabsComponent';
import Axios from 'axios';

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
        Axios.post(`http://localhost:8080/app/transactions/add-transactions`, transaction );
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
                        <div className="form-row">
                            <div className="form-group col-md-1">
                                <label>
                                    Amount: ($0.00):
                                </label>
                            </div>
                            <div className="form-group col-md-3">
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
                            <div className="form-group col-md-3">
                                <input type="text" placeholder="Enter Recipient" value={this.state.recipient} onChange={(event: any) => this.handleRecipientChange(event)} />
                            </div>
                        </div>
                        <br></br>
                        <div className="form-row">
                            <div className="form-group col-md-1">
                                <label>
                                    Transaction Date: 
                                </label>
                            </div>
                            <div className="form-group col-md-3">
                                <input type="text" placeholder="Enter Transaction Date" value={this.state.transactionDate} onChange={(event: any) => this.handleDateChange(event) }/>
                            </div>
                        </div><br></br>
                        <div className="form-row">
                            <div className="form-group col-md-1">
                                <label>
                                    Transaction Type:
                                </label>
                            </div>
                            <div className="form-group col-md-3">
                                <input type="number" placeholder="Enter Transasction Type" value={this.state.transactionType} onChange={(event: any) => this.handleTransactionType(event)} />
                            </div>
                        </div><br></br>
                        <button className="btn-dark" onClick={(event: any) => this.handleSubmit(event)}>Submit</button>                 
                </div>
            </div>
        )
    }
}