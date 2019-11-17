import React from 'react';
import { CarRecordsTabsComponent } from '../TabsComponents/CarRecordsTabComponent';

export class AddCarRecordInformationComponent extends React.Component<any, any> {
    render() {
        return(
            <div>
                <div id="hero-add-car-record-information-background">
                    <h1>Car Record Information: Add Car Record Information</h1>
                    <hr></hr>
                    <CarRecordsTabsComponent />
                    <div className="add-car-record-information-by-id-split get-car-information-by-id-left">
                        <div className="form-row">
                            <input type="text" placeholder="Enter Amount" />
                        </div><br></br>
                        <div className="form-row">
                            <input type="text" placeholder="Enter Car Job" />
                        </div><br></br>
                        <div className="form-row">
                            <input type="text" placeholder="Enter Repair Shop" />
                        </div><br></br>
                            <button className="btn-dark">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}