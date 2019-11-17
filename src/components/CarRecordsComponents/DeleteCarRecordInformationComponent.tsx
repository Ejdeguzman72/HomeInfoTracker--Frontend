import React from 'react';
import { CarRecordsTabsComponent } from '../TabsComponents/CarRecordsTabComponent';

export class DeleteCarRecordInformation extends React.Component<any, any> {
    render() {
        return(
            <div>
                <div id="hero-delete-car-record-information-background">
                    <h1>Car Record Information: Delete Car Record Information</h1>
                    <hr></hr>
                    <CarRecordsTabsComponent />
                    <div className="form-row">
                            <input type="number" placeholder="Enter ID to be deleted" />
                        </div><br></br>
                        <div className="form-row">
                            <button className="btn-dark">Delete Car Record Information</button>
                        </div>
                </div>
            </div>
        )
    }
}