import React from 'react';
import { TransactionTabsComponent } from '../TabsComponents/TransactionTabsComponent';

export class UpdateTransactionInformationComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div id="hero-update-transaction-information-background">
                    <h1>Transaction Information: Update Transaction Information</h1>
                    <hr></hr>
                    <TransactionTabsComponent />
                </div>
            </div>
        )
    }
}