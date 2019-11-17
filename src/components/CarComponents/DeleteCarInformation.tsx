import React from 'react';
import { CarTabsComponent } from '../TabsComponents/CarTabsComponent';

export class DeleteCarInformation extends React.Component<any, any> {
    render() {
        return (
            <div>
                <h1>Delete Car Information</h1>
                <hr></hr>
                <CarTabsComponent />
            </div>
        )
    }
}