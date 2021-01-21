import React from 'react';
import HomeTabComponent from '../TabsComponents/HomeTabComponent';
import MedicalRecordsTabsComponent from '../TabsComponents/MedicalRecordsTabsComponent';
import MedicalRecordInformationTableComponent from './MedicalRecordInformationTableComponent';

export class MedicalRecordInfomrationComponent extends React.Component<any, any> {
    render() {
        return (
            <div className="tab-center">
                <div id="hero-medical-record-information-background">
                    {/* <h1>Medical Record Information</h1> */}
                    <hr></hr>
                    <HomeTabComponent />
                    <MedicalRecordsTabsComponent />
                    <br></br>
                    <div id="medical-record-info-container">
                        <p>
                            This section covers medical record information. Information that is covered
                            includes doctor office, person that underwent medical treatment, amount,
                            name of the doctor that performed the medical procedure, and the description
                            for the treatment.
                        </p>
                        <MedicalRecordInformationTableComponent />
                    </div>
                </div>
            </div>
        )
    }
}