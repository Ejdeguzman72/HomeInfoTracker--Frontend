import React from 'react';
import { Container } from 'react-bootstrap';
import BankTabComponent from '../TabsComponents/BankTabsComponent';
import HomeTabComponent from '../TabsComponents/HomeTabComponent';
import BankInformationTableComponent from './BankInformationTableComponent';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';

export class BankInformationComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Bank Information</title>
                </Helmet>
                <div id="hero-car-information-background">
                    <h1>Bank Information</h1>
                    <hr></hr>
                    <div className="tab-center">
                        <HomeTabComponent />
                        <BankTabComponent />
                        <br></br>
                        <BankInformationTableComponent />
                    </div>
                </div>
                <FooterComponent />
            </div>
        )
    }
}