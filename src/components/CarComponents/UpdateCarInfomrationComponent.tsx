import React from 'react';
import { CarTabsComponent } from '../TabsComponents/CarTabsComponent';

export class UpdateCarInformationComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div id="margin-hero">
                    <div id="hero-update-car-information-background">
                        <h1>Car Information: Update Car Information</h1>
                        <hr></hr>
                        <CarTabsComponent />
                    </div>
                </div>
            </div>
        )
    }
}