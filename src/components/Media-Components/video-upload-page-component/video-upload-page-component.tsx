import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import VideoUploadComponent from '../../File-Upload-Components/VideoUploadComponent';
import VideosUploadComponent from '../../File-Upload-Components/VideoUploadComponent';
import { FooterComponent } from '../../footer-component/footer-component';
import VideosTabComponent from '../../TabsComponents/VideosTabComponent';
import VideoUploadTabComponent from '../../TabsComponents/VideoUploadTabComponent';


export class VideoUploadPageComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Video Uploads</title>
                </Helmet>
                <div className="hero-media-background">
                    <h2>Video Uploads</h2>
                    <hr></hr>
                    <div className="tab-center">
                        <VideosTabComponent />
                        <VideoUploadTabComponent />
                    </div>
                    <div className="media-uploads-container">
                        <Container className="container" style={{ width: 'auto' }}>
                            <div style={{ margin: "20px" }}>
                                <h3>Video Uploads</h3>
                                <h4>Upload Files</h4>
                            </div>
                        </Container>
                        <VideoUploadComponent />
                    </div>
                </div>
                <FooterComponent />
            </div>
        )
    }
}