import React from 'react';
import CardTabsComponent from '../TabsComponents/CardTabsComponent';
import { Table, Container, Form } from 'react-bootstrap';
import Axios from 'axios';

export class GetCardInformationByIdComponent extends React.Component<any, any> {
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
            card: []
        };
    }

    handleChange(event: any) {
        const value = event.target.value;
        this.setState({
            ...this.state,
            cardid: value
        });
    }

    handleSubmit() {

        alert(`You have retrieved the card with id of ${this.state.cardid}`);
        const url = `http://localhost:8080/app/cards/card/${this.state.cardid}`;
        Axios.get(url).then(payload => {
            this.setState({
                ...this.state,
                card: (
                    <tr key={this.state.cardid}>
                        <th>{payload.data.cardid}</th>
                        <th>{payload.data.cardTypeId}</th>
                        <th>{payload.data.bankId}</th>
                        <th>{payload.data.name}</th>
                        <th>{payload.data.cardNumber}</th>
                        <th>{payload.data.expirationDate}</th>
                        <th>{payload.data.securityCode}</th>
                    </tr>
                )
            })
        })
    }

    render() {
        return (
            <div>
                <div id="hero-get-contact-information-by-id-background">
                    <h1>Card Information: Find Card By ID Number</h1>
                    <hr></hr>
                    <CardTabsComponent />
                    <br></br>
                    <Container className="get-card-information-by-id-container">
                        <Form>
                            <label>
                                Enter Card ID Number:  
                            </label><br></br>
                            <input type="number" className="get-card-informaton-by-id-input" onChange={(event: any) => this.handleChange(event)} />
                            <br></br><br></br>
                            <button className="btn-dark" onClick={() => this.handleSubmit()}>Submit</button>
                        </Form>
                    </Container>
                    <br></br>
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
                                    {this.state.card}
                                </tbody>
                                <br></br>
                            </Table>
                            <br></br><br></br>
                </div>
            </div>
        )
    }
}