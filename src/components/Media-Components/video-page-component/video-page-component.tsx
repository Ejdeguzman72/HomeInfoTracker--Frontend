import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../footer-component/footer-component';
import HomeTabComponent from '../../TabsComponents/HomeTabComponent';
import VideosTabComponent from '../../TabsComponents/VideosTabComponent';
import VideoUploadTabComponent from '../../TabsComponents/VideoUploadTabComponent';

export class VideoPageComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Videos</title>
                </Helmet>
                <div className="hero-media-background">
                    <br></br>
                    <div className="tab-center">
                        <VideosTabComponent />
                        <VideoUploadTabComponent />
                    </div>
                    <br></br>
                    <br></br>
                </div>
                <FooterComponent />
            </div>
        )
    }
}