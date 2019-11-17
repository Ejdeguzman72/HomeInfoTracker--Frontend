import React from 'react';
import { CarTabsComponent } from '../TabsComponents/CarTabsComponent';

export class DeleteCarInformationComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div id="margin-hero">
                    <div id="hero-delete-car-information-background">
                        <h1>Car Information: Delete Car Information</h1>
                        <hr></hr>
                        <CarTabsComponent />
                        <div className="form-row">
                            <input type="number" placeholder="Enter ID to be deleted" />
                        </div><br></br>
                        <div className="form-row">
                            <button className="btn-dark">Delete Car Information</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}