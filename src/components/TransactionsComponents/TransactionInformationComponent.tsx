import React from 'react';
import TransactionTabsComponent from '../TabsComponents/TransactionTabsComponent';
import { Container } from 'react-bootstrap';
import HomeTabComponent from '../TabsComponents/HomeTabComponent';

export class TransactionInformationComponent extends React.Component<any, any> {
    render() {
        return (
            <div className="tab-center">
                <div id="hero-transaction-information-background">
                    <h1>Transaction Information</h1>
                    <hr></hr>
                    <HomeTabComponent />
                    <TransactionTabsComponent />
                    <br></br>
                    <Container id="transaction-information-container">
                        <p>The following information pertains to transactions. Entries can be entered in the system
                        for different types of expenses such as housing, food, utilities, etc. Users are able to 
                        retrieve transaction information, enter new transactions and update information.
                        </p>
                    </Container>
                </div>
            </div>
        )
    }
}