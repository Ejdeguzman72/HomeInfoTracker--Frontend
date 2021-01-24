import React from 'react';
import CardTabsComponent from '../TabsComponents/CardTabsComponent';
import HomeTabComponent from '../TabsComponents/HomeTabComponent';
import CardInformationTableComponent from './CardInformationTableComponent';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';

export class CardInformationComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Card Information</title>
                </Helmet>
                <div id="hero-contact-information-background">
                    <h1>Card Information</h1>
                    <hr></hr>
                    <div className="tab-center">
                        <HomeTabComponent />
                        <CardTabsComponent />
                        <br></br>
                        <CardInformationTableComponent />
                    </div>
                </div>
                <FooterComponent />
            </div>
        )
    }
}