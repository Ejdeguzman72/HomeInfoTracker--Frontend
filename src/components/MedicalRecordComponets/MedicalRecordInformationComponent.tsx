import React from 'react';
import { ContactTabsComponent } from '../TabsComponents/ContactTabsComponent';
import { DoctorOfficeTabsComponent } from '../TabsComponents/DoctorOfficeTabsComponent';
import { MedicalRecordsTabsComponent } from '../TabsComponents/MedicalRecordsTabsComponent';

export class MedicalRecordInfomrationComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div id="hero-medical-record-information-background">
                    <h1>Medical Record Information</h1>
                    <hr></hr>
                    <MedicalRecordsTabsComponent />
                    <br></br>
                    <div id="medical-record-info-container">
                        <p>
                            This section covers medical record information. Information that is covered
                            includes doctor office, person that underwent medical treatment, amount,
                            name of the doctor that performed the medical procedure, and the description
                            for the treatment.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}