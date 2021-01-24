import React from 'react';
import TransactionTabsComponent from '../TabsComponents/TransactionTabsComponent';
import { Container } from 'react-bootstrap';
import HomeTabComponent from '../TabsComponents/HomeTabComponent';
import TransactionInformationTableComponent from './TransactionInformationTableComponent';
import { Helmet } from 'react-helmet';
import TransactionUploadsTabsComponent from '../TabsComponents/TransactionUploadsTabComponent';
import { FooterComponent } from '../footer-component/footer-component';

export class TransactionInformationComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Transaction Information</title>
                </Helmet>
                <div id="hero-transaction-information-background">
                    <h1>Transaction Information</h1>
                    <hr></hr>
                    <div className="tab-center">
                        <HomeTabComponent />
                        <TransactionTabsComponent />
                        <TransactionUploadsTabsComponent />
                        <br></br>
                        <TransactionInformationTableComponent />
                    </div>
                </div>
                <FooterComponent />
            </div>
        )
    }
}