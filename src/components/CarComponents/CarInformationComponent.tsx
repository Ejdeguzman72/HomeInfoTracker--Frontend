import React from 'react';
import CarTabsComponent from '../TabsComponents/CarTabsComponent';
import HomeTabComponent from '../TabsComponents/HomeTabComponent';
import CarInformastionTableComponent from './CarInformationTableComponent';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';

export class CarInformationComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Car Information</title>
                </Helmet>
                <div id="hero-car-information-background">
                    <h1>Car Information</h1>
                    <hr></hr>
                    <div className="tab-center">
                        <HomeTabComponent />
                        <CarTabsComponent />
                        <br></br>
                        <CarInformastionTableComponent />
                    </div>
                </div>
                <FooterComponent />
            </div>
        )
    }
}