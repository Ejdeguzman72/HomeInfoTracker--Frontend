import React from 'react';
import { CardTabsComponent } from '../TabsComponents/CardTabsComponent';
import { Table } from 'react-bootstrap';
import Axios from 'axios';

export class GetAllCardInformationComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            cardid: 0,
            cardTypeId: 0,
            bankId: 0,
            name: "",
            cardNumber: "",
            expirationDate: "",
            securityCode: "",
            cards: []
        };
    }

    async componentDidMount() {
        alert(`You have retrieved all the card information`);
        const url = "http://localhost:8080/app/cards/all";

        Axios.get(url).then(payload => {
            this.setState({
                ...this.state,
                cards: payload.data.map((o:any) => {
                    return (
                        <tr key={o.cardid}>
                            <th scope="row">{o.cardid}</th>
                            <th scope="row">{o.cardTypeId}</th>
                            <th scope="row">{o.bankId}</th>
                            <th scope="row">{o.name}</th>
                            <th scope="row">{o.cardNumber}</th>
                            <th scope="row">{o.expirationDate}</th>
                            <th scope="row">{o.securityCode}</th>
                        </tr>
                    )
                })
            })
        })
    }
    render() {
        return (
            <div>
                 <div id="hero-get-all-car-record-information-background">
                    <h1>Card Information: Get All Card Information</h1>
                    <hr></hr>
                    <CardTabsComponent />
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Card Type</th>
                            <th>Bank </th>
                            <th>Name</th>
                            <th>Card Number</th>
                            <th>Expiration Date</th>
                            <th>Security Code</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.cards}
                        </tbody>
                    </Table>
                </div>
                
            </div>
        )
    }
}