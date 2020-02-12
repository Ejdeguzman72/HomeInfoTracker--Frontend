import React from 'react';
import { RepairShopTabsComponent } from '../TabsComponents/RepairShopTabsComponent';

export class RepairShopInformationComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div id="hero-repair-information-background">
                    <h1>Repair Shop Information</h1>
                    <hr></hr>
                    <RepairShopTabsComponent />
                </div>
            </div>
        )
    }
}