import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { CarRecordUploadComponent } from '../File-Upload-Components/CarRecordUploadComponent';
import CarRecordsTabsComponent from '../TabsComponents/CarRecordsTabComponent';
import CarRecordsUploadsTabsComponent from '../TabsComponents/CarRecordsUploadsTabComponent';
import HomeTabComponent from '../TabsComponents/HomeTabComponent';

const CarRecordUploadPageComponent = () => {
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
                    <CarRecordsTabsComponent />
                    <CarRecordsUploadsTabsComponent />
                </div>
                <div className="media-uploads-container"> 
                    <Container className="container" style={{ width: 'auto' }}>
                        <div style={{ margin: "20px" }}>
                            <h3>Card Record Files</h3>
                            <h4>Upload Files</h4>
                        </div>
                        <CarRecordUploadComponent />
                    </Container>
                </div>
            </div>
        </div >
    )
}

export default CarRecordUploadPageComponent;