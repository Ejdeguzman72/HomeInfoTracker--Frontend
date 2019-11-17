import React from 'react';
import { CarRecordsTabsComponent } from '../TabsComponents/CarRecordsTabComponent';

export class UpdateCarRecordInformationComponent extends React.Component<any, any> {
    render() {
        return(
            <div>
                <div id="hero-update-car-record-information-background">
                    <h1>Car Record Information: Update Car Record Information</h1>
                    <hr></hr>
                    <CarRecordsTabsComponent />
                </div>
            </div>
        )
    }
}