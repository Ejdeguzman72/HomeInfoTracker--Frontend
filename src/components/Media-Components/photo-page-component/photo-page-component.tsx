import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../footer-component/footer-component';
import HomeTabComponent from '../../TabsComponents/HomeTabComponent';
import PhotosTabComponent from '../../TabsComponents/PhotosTabComponent';
import PhotoUploadsTabComponent from '../../TabsComponents/PhotoUploadTabComponent';
import PhotoGalleryComponent from './photo-gallery-component';

export class PhotoPageComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Photos</title>
                </Helmet>
                <div className="hero-media-background">
                    <br></br>
                    <h1>Photos</h1>
                    <hr></hr>
                    <div className="tab-center">
                        <PhotosTabComponent />
                        <PhotoUploadsTabComponent />
                    </div>
                    <br></br>
                    <PhotoGalleryComponent />
                </div>
                <br></br>
                <FooterComponent />
            </div>
        )
    }
}