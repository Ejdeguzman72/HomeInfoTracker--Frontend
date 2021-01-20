import React from 'react';
import CardTabsComponent from '../TabsComponents/CardTabsComponent';
import Axios from 'axios';
import { Container, Form } from 'react-bootstrap';


export class AddCardComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            cardid: 0,
            cardTypeId: 0,
            bankId: 0,
            name: "",
            cardnumber: "",
            expirationDate: "",
            securityCode: ""
        };
    }

    handleCardTypeId(event: any) {
        this.setState({
            cardTypeId: event.target.value
        });
    }
    handleBankId(event: any) {
        this.setState({
            bankId: event.target.value
        });
    }
    handleName(event: any) {
        this.setState({
            name: event.target.value
        });
    }
    handleCardNumber(event: any) {
        this.setState({
            cardNumber: event.target.value
        });
    }
    handleExpirationDate(event: any) {
        this.setState({
            expirationDate: event.target.value
        });
    }
    handleSecurityCode(event: any) {
        this.setState({
            securityCode: event.target.value
        });
    }

    handleSubmit(event: any) {
        event.preventDefault();
        const card = {
            cardid: this.state.cardid,
            cardTypeId: this.state.cardTypeId,
            bankId: this.state.bankId,
            name: this.state.name,
            cardNumber: this.state.cardNumber,
            expirationDate: this.state.expirationDate,
            securityCode: this.state.securityCode
        };
        const url = ("http://localhost:8080/app/cards/add-a-card");
        Axios.post(url, card);
        alert(`Created Card`);
        console.log(card);
    }
    render() {
        return (
            <div>
                <div id="hero-add-car-record-information-background">
                    <h1>Card Information: Add Card Information</h1>
                    <hr></hr>
                    <CardTabsComponent />
                    <br></br>
                    <Container className="add-card-information-container">
                        <Form>
                            <label>
                                Card Type ID:
                            </label><br></br>
                            <input type="number" className="add-card-information-input" onChange={(event: any) => this.handleCardTypeId(event)} /><br></br>
                            <label>
                                Bank ID:
                            </label><br></br>
                            <input type="number" className="add-card-information-input" onChange={(event: any) => this.handleBankId(event)} /><br></br>
                            <label>
                                Cardholder Name:
                            </label><br></br>
                            <input type="text" className="add-card-information-input" value={this.state.name} onChange={(event: any) => this.handleName(event)} /><br></br>
                            <label>
                                Card No:
                            </label><br></br>
                            <input type="text" className="add-card-information-input" value={this.state.cardNumber} onChange={(event: any) => this.handleCardNumber(event)} /><br></br>
                            <label>
                                Expiration Date (MM-DD-YYYY)
                            </label><br></br>
                            <input type="text" className="add-card-information-input"  value={this.state.expirationDate} onChange={(event: any) => this.handleExpirationDate(event)} /><br></br>
                            <label>
                                Security Code:
                            </label><br></br>
                            <input type="text" className="add-card-information-input"  value={this.state.securityCode} onChange={(event: any) => this.handleSecurityCode(event)} /><br></br><br></br>
                            <button className="btn-dark" onClick={(event: any) => this.handleSubmit(event)}>Submit</button>
                        </Form>
                    </Container>
                </div>
            </div>
        )
    }
}