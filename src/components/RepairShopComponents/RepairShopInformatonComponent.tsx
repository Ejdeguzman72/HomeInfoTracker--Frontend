import React from 'react';
import HomeTabComponent from '../TabsComponents/HomeTabComponent';
import RepairShopTabsComponent from '../TabsComponents/RepairShopTabsComponent';

export class RepairShopInformationComponent extends React.Component<any, any> {
    render() {
        return (
            <div className="tab-center">
                <div id="hero-repair-information-background">
                    <h1>Repair Shop Information</h1>
                    <hr></hr>
                    <HomeTabComponent />
                    <RepairShopTabsComponent />
                    <br></br>
                    <div id="repair-shop-info-container">
                        <p>This section covers repair shop information that are used or within
                            the area. Information that is covered is name of the auto repair shop,
                            address, city, and state. Users are able to retrieve repair shop information,
                            enter new repair shop information, update repair shop information and 
                            delete repair shop information.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}