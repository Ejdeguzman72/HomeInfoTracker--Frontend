import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import HomeTabComponent from '../TabsComponents/HomeTabComponent';
import MedicalRecordTabsComponent from '../TabsComponents/MedicalRecordsTabsComponent';
import MedicalRecordsUploadsTabsComponent from '../TabsComponents/MedicalRecordsUploadsTabComponent';
import { MedicalRecordUploadComponent } from './MedicalRecordUploadComponent';

const MedicalRecordUploadPageComponent = () => {
    return (
        <div>
            <Helmet>
                <title>Car Record Upload</title>
            </Helmet>
            <div id="hero-car-record-information-background">
                <h2>Car Record Uploads</h2>
                <hr></hr>
                <div className="tab-center">
                    <HomeTabComponent />
                    <MedicalRecordTabsComponent />
                    <MedicalRecordsUploadsTabsComponent />
                </div>
                <div className="media-uploads-container"> 
                    <Container className="container" style={{ width: 'auto' }}>
                        <div style={{ margin: "20px" }}>
                            <h3>Card Record Files</h3>
                            <h4>Upload Files</h4>
                        </div>
                        <MedicalRecordUploadComponent />
                    </Container>
                </div>
            </div>
        </div >
    )
}

export default MedicalRecordUploadPageComponent;