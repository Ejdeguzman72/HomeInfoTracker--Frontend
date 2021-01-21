import React from 'react';
import CardInformationTableComponent from '../CardComponents/CardInformationTableComponent';
import CarRecordsTabsComponent from '../TabsComponents/CarRecordsTabComponent';
import HomeTabComponent from '../TabsComponents/HomeTabComponent';
import CarRecordInformastionTableComponent from './CarRecordInformationTableComponent';


export class CarRecordInformationComponent extends React.Component<any, any> {
    render() {
        return (
            <div className="tab-center">
                <div id="hero-car-record-information-background">
                    {/* <h1>Car Record Information</h1> */}
                    <hr></hr>
                    <HomeTabComponent />
                    <CarRecordsTabsComponent />
                    <br></br>
                    <div id="car-record-information-container">
                        <p>The following information pertains to car records. This information can involve maintenance
                        or tune-ups to the car. This will list cost, type of work done on the car, location of the shop, etc. Supporting documents such as receipts
                        can also be accepted as well.
                        </p>
                        <CarRecordInformastionTableComponent />
                    </div>
                </div>
            </div>
        )
    }
}