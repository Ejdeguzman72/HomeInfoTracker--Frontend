import React from 'react';
import { CarTabsComponent } from '../TabsComponents/CarTabsComponent';

export class CarInformationComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div id="hero-car-information-background">
                    <h1>Car Information</h1>
                    <hr></hr>
                    <CarTabsComponent />
                    <br></br>
                    <div id="car-information-container">
                        <p>Car information can be viewed here regarding driver,
                        location, mileage, manufacturer, and model. Users are 
                        able to retrieve car information, enter new car information, 
                        update car information and delete car information.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}