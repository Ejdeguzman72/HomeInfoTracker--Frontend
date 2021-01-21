import React from 'react';
import CarTabsComponent from '../TabsComponents/CarTabsComponent';
import HomeTabComponent from '../TabsComponents/HomeTabComponent';
import CarInformastionTableComponent from './CarInformationTableComponent';


export class CarInformationComponent extends React.Component<any, any> {
    render() {
        return (
            <div className="tab-center">
                <div id="hero-car-information-background">
                    {/* <h1>Car Information</h1> */}
                    <hr></hr>
                    <HomeTabComponent />
                    <CarTabsComponent />
                    <br></br>
                    <div id="car-information-container">
                        <p>Car information can be viewed here regarding driver,
                        location, mileage, manufacturer, and model. Users are 
                        able to retrieve car information, enter new car information, 
                        update car information and delete car information.
                        </p>
                        <CarInformastionTableComponent />
                    </div>
                </div>
            </div>
        )
    }
}