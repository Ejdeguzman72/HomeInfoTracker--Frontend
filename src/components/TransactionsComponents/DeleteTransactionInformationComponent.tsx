import React from 'react';
import { TransactionTabsComponent } from '../TabsComponents/TransactionTabsComponent';

export class DeleteTransactionInformationComponent extends React.Component<any, any> {
    rnder() {
        return (
            <div>
                <h1>Transaction Information: Delete a Transaction</h1>
                <hr></hr>
                <TransactionTabsComponent />
                <div className="form-row">
                            <input type="number" placeholder="Enter ID to be deleted" />
                        </div><br></br>
                        <div className="form-row">
                            <button className="btn-dark">Delete Trasaction Item</button>
                        </div>
            </div>
        )
    }
    
}