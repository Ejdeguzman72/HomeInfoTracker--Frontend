import React from 'react';
import { Container } from 'react-bootstrap';
import DoctorOfficeTabsComponent from '../TabsComponents/DoctorOfficeTabsComponent';
import HomeTabComponent from '../TabsComponents/HomeTabComponent';
import DoctorInformationTableComponent from './DoctorInformationTableComponent';
import { Helmet } from 'react-helmet';

export class DoctorOfficeInfomrationComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Doctor Office Information</title>
                </Helmet>
                <div id="hero-doctor-office-information-background">
                    <h1>Doctor Office Information</h1>
                    <hr></hr>
                    <div className="tab-center">
                        <HomeTabComponent />
                        <DoctorOfficeTabsComponent />
                        <br></br>
                        <DoctorInformationTableComponent />
                    </div>
                </div>
            </div>
        )
    }
}