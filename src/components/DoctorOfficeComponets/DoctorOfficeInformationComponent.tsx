import React from 'react';
import { Container } from 'react-bootstrap';
import DoctorOfficeTabsComponent from '../TabsComponents/DoctorOfficeTabsComponent';
import HomeTabComponent from '../TabsComponents/HomeTabComponent';
import DoctorInformationTableComponent from './DoctorInformationTableComponent';

export class DoctorOfficeInfomrationComponent extends React.Component<any, any> {
    render() {
        return (
            <div className="tab-center">
                <div id="hero-doctor-office-information-background">
                    {/* <h1>Doctor Office Information</h1> */}
                    <hr></hr>
                    <HomeTabComponent />
                    <DoctorOfficeTabsComponent />
                    <br></br>
                    <Container className="doctor-office-info-container">
                        <p>The following pertains to doctor office information.
                        This consists of name of doctor, office type, location,
                        name of doctor that works here, and the type of doctor office.
                        Ex: Physician, Optometrist, Dentist, Chiropractor, etc. Users 
                        are able to retrieve doctor office information, enter new office information,
                        update and delete office information.
                        </p>
                        <DoctorInformationTableComponent />
                    </Container>
                </div>
            </div>
        )
    }
}