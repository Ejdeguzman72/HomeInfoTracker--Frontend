import React from 'react';
import HomeTabComponent from '../TabsComponents/HomeTabComponent';
import MedicalRecordsTabsComponent from '../TabsComponents/MedicalRecordsTabsComponent';
import MedicalRecordInformationTableComponent from './MedicalRecordInformationTableComponent';
import { Helmet } from 'react-helmet';

export class MedicalRecordInfomrationComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Medical Record Information</title>
                </Helmet>
                <div id="hero-medical-record-information-background">
                    <h1>Medical Record Information</h1>
                    <hr></hr>
                    <div className="tab-center">
                        <HomeTabComponent />
                        <MedicalRecordsTabsComponent />
                        <br></br>
                        <MedicalRecordInformationTableComponent />
                    </div>
                </div>
            </div>
        )
    }
}