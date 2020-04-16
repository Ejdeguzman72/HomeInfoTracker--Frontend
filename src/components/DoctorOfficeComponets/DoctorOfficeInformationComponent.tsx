import React from 'react';
import { ContactTabsComponent } from '../TabsComponents/ContactTabsComponent';
import { DoctorOfficeTabsComponent } from '../TabsComponents/DoctorOfficeTabsComponent';

export class DoctorOfficeInfomrationComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div id="hero-doctor-office-information-background">
                    <h1>Doctor Office Information</h1>
                    <hr></hr>
                    <DoctorOfficeTabsComponent />
                    <br></br>
                    <div id="medical-record-info-container">
                        <p>The following pertains to doctor office information.
                        This consists of name of doctor, office type, location,
                        name of doctor that works here, and the type of doctor office.
                        Ex: Physician, Optometrist, Dentist, Chiropractor, etc. Users 
                        are able to retrieve doctor office information, enter new office information,
                        update and delete office information.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}