import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import HomeTabComponent from '../TabsComponents/HomeTabComponent';
import TransactionTabsComponent from '../TabsComponents/TransactionTabsComponent';
import TransactionUploadsTabsComponent from '../TabsComponents/TransactionUploadsTabComponent';
import { TransactionUploadComponent } from './TransactionUploadComponent';

const TransactionUploadPageComponent = () => {
    return (
        <div>
            <Helmet>
                <title>Transaction Upload</title>
            </Helmet>
            <div id="hero-medical-record-information-background">
                <h2>Transaction Uploads</h2>
                <hr></hr>
                <div className="tab-center">
                    <HomeTabComponent />
                    <TransactionTabsComponent />
                    <TransactionUploadsTabsComponent />
                </div>
                <div className="media-uploads-container">
                    <Container className="container" style={{ width: 'auto' }}>
                        <div style={{ margin: "20px" }} >
                            <h3>Transaction Uploads</h3>
                            <h4>Upload Files</h4>
                        </div>
                        <TransactionUploadComponent />
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default TransactionUploadPageComponent;