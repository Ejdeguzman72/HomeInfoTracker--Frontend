import React from 'react';
import CardInformationTableComponent from '../CardComponents/CardInformationTableComponent';
import CarRecordsTabsComponent from '../TabsComponents/CarRecordsTabComponent';
import HomeTabComponent from '../TabsComponents/HomeTabComponent';
import CarRecordInformastionTableComponent from './CarRecordInformationTableComponent';
import { Helmet } from 'react-helmet';
import CarRecordsUploadsTabsComponent from '../TabsComponents/CarRecordsUploadsTabComponent';
import { FooterComponent } from '../footer-component/footer-component';

export class CarRecordInformationComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Car Record Information</title>
                </Helmet>
                <div id="hero-car-record-information-background">
                    <h1>Car Record Information</h1>
                    <hr></hr>
                    <div className="tab-center">
                        <HomeTabComponent />
                        <CarRecordsTabsComponent />
                        <CarRecordsUploadsTabsComponent />
                        <br></br>                   
                        <CarRecordInformastionTableComponent />
                    </div>
                </div>
                <FooterComponent />
            </div>
        )
    }
}