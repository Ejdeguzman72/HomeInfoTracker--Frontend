import React from 'react';
import { TransactionTabsComponent } from '../TabsComponents/TransactionTabsComponent';

export class TransactionInformationComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div id="hero-transaction-information-background">
                    <h1>Transaction Information</h1>
                    <hr></hr>
                    <TransactionTabsComponent />
                    <br></br>
                    <div id="transaction-information-container">
                        <p>The following information pertains to transactions. Entries can be entered in the system
                        for different types of expenses such as housing, food, utilities, etc. It is imperative that information
                        is entered correctly and that it is accurate. It is possible to attach receipts or other supporting documents
                        to back these transactions.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}