import React from 'react';
import { CardTabsComponent } from '../TabsComponents/CardTabsComponent';

export class CardInformationComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div id="hero-contact-information-background">
                    <h1>Card Information</h1>
                    <hr></hr>
                    <CardTabsComponent />
                    <br></br>
                    <div id="card-information-container">
                        <p>The following pertains to card information. Cards can be listed as credit/debit cards.
                        Information will consist of bank information, name on card, expiration date, card number and security code.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}