import React from 'react';
import { DoctorOfficeTabsComponent } from '../TabsComponents/DoctorOfficeTabsComponent';
import { Container } from 'react-bootstrap';

export class DoctorOfficeInfomrationComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div id="hero-doctor-office-information-background">
                    <h1>Doctor Office Information</h1>
                    <hr></hr>
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
                    </Container>
                </div>
            </div>
        )
    }
}