import React from 'react';
import { TransactionTabsComponent } from '../TabsComponents/TransactionTabsComponent';

export class AddTransactionComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div id="hero-add-transaction-information-background">
                    <h1>Transaction Information: Add A Transaction</h1>
                    <hr></hr>
                    <TransactionTabsComponent />
                    <div className="add-car-record-information-by-id-split get-car-information-by-id-left">
                        <div className="form-row">
                            <input type="text" placeholder="Enter Amount" />
                        </div><br></br>
                        <div className="form-row">
                            <input type="text" placeholder="Enter Recipient" />
                        </div><br></br>
                        <div className="form-row">
                            <input type="text" placeholder="Enter Transaction Date" />
                        </div><br></br>
                        <div className="form-row">
                            <input type="text" placeholder="Enter Transasction Type" />
                        </div><br></br>
                            <button className="btn-dark">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}