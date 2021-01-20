import React from 'react';
import { Container } from 'react-bootstrap';
import BankTabComponent from '../TabsComponents/BankTabsComponent';
import HomeTabComponent from '../TabsComponents/HomeTabComponent';


export class BankInformationComponent extends React.Component<any, any> {
    render() {
        return (
            <div className="tab-center">
                <div id="hero-car-information-background">
                    <h1>Bank Information</h1>
                    <hr></hr>
                    <HomeTabComponent />
                    <BankTabComponent />
                    <br></br>
                    <Container id="bank-information-container">
                        <p>Bank Information consists of name, address, city, and state of branch.
                            Users are able to0 retrieve bank information, enter new bank information,
                            update bank information and delete bank information. 
                        </p>
                    </Container>
                </div>
            </div>
        )
    }
}