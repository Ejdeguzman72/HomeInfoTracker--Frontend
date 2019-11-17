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
                    <div id="transaction-information-container">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-12 offset-6">
                                    <p id="transaction-information-p-border">Car information can be viewed here regarding driver, 
                                    location, mileage, manufacturer, and model
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}