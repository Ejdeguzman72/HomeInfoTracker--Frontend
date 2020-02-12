import React from 'react';
import { CardTabsComponent } from '../TabsComponents/CardTabsComponent';
import Axios from 'axios';


export class UpdateCardComponent extends React.Component<any, any> {
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

    handleCardId(event: any) {
        this.setState({
            cardid: event.target.value
        })
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
        const url = (`http://localhost:8080/app/cards/card/${this.state.cardid}`);
        Axios.put(url, card );
        alert(`Updated Card ID: ${this.state.cardid}`);
        console.log(card);
    }
    render() {
        return(
            <div>
                <div id="hero-add-car-record-information-background">
                    <h1>Card Information: Update Card Information</h1>
                    <hr></hr>
                    <CardTabsComponent />
                    <br></br>
                    <div className="form-row">
                        <div className="form-group col-md-1 offset-2">
                            <label>
                                Card ID:
                            </label>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="number" placeholder="Card ID No" onChange={(event:any) => this.handleCardId(event)} />
                        </div>
                    </div>
                    <br></br>
                    <div className="form-row">
                        <div className="form-group col-md-1">
                            <label>
                                Card Type ID:
                            </label>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="number" placeholder="Card Type ID" onChange={(event:any) => this.handleCardTypeId(event)} />
                        </div>
                        <div className="form-group col-md-1">
                            <label>
                                Bank ID:
                            </label>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="number" placeholder="Bank ID" onChange={(event:any) => this.handleBankId(event)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-1">
                            <label>
                                Cardholder Name:
                            </label>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" placeholder="Name" value={this.state.name} onChange={(event:any) => this.handleName(event)} />
                        </div>
                        <div className="form-group col-md-1">
                            <label>
                                Card No:
                            </label>
                        </div> 
                        <div className="form-group col-md-2">
                            <input type="text" placeholder="Card Number" value={this.state.cardNumber} onChange={(event:any) => this.handleCardNumber(event)}/>
                        </div>   
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-1">
                            <label>
                                Expiration Date (MM-DD-YYYY)
                            </label>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" placeholder="Expiration Date" value={this.state.expirationDate} onChange={(event:any) => this.handleExpirationDate(event)} />
                        </div>
                        <div className="form-group col-md-1">
                            <label>
                                Security Code:
                            </label>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" placeholder="Security Code" value={this.state.securityCode} onChange={(event:any) => this.handleSecurityCode(event)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4 offset-3">
                            <button className="btn-dark" onClick={(event: any) => this.handleSubmit(event)}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}