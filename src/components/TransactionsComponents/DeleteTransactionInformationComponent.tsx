import React from 'react';
import { TransactionTabsComponent } from '../TabsComponents/TransactionTabsComponent';
import Axios from 'axios';

export class DeleteTransactionInformationComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            transactionId: 0 
        }
    }

    handleChange(event: any) {
        const value = event.target.value;
        this.setState({
            ...this.state,
            transactionId: value
        });
    }

    handleSubmit(event: any) {
        event.preventDefault();
        alert(`You have deleted the transaction with ${this.state.transactionId}`);
        const url = "http://localhost:3000/app/transactions/delete";
        Axios.delete(url);
    }
    render() {
        return (
            <div>
                <h1>Transaction Information: Delete a Transaction</h1>
                <hr></hr>
                <TransactionTabsComponent />
                <div className="form-row">
                            <input type="number" placeholder="Enter ID to be deleted" value={this.state.transactionId} onChange={(event: any) => this.handleChange(event)} />
                        </div><br></br>
                        <div className="form-row">
                            <button className="btn-dark" onClick={(event: any) => this.handleSubmit(event)} >Delete Trasaction Item</button>
                        </div>
            </div>
        )
    }
    
}