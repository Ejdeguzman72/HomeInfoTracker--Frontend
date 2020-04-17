import React from 'react';
import { BankTabsComponent } from '../TabsComponents/BankTabsComponent';
import Axios from 'axios';
import { Container, Form } from 'react-bootstrap';

export class UpdateBankInformationComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            bankid: 0,
            name: "",
            address: "",
            city: "",
            state: "",
            zip: ""
        };
    }

    handleBankIdChange(event: any) {
        this.setState({
            bankid: event.target.value
        })
    }

    handleNameChange(event: any) {
        this.setState({
            name: event.target.value
        });
    }

    handleAddressChange(event: any) {
        this.setState({
            address: event.target.value
        });
    }

    handleCityChange(event: any) {
        this.setState({
            city: event.target.value
        });
    }

    handleStateChange(event: any) {
        this.setState({
            state: event.target.value
        });
    }

    handleZipChange(event: any) {
        this.setState({
            zip: event.target.value
        });
    }

    handleSubmit(event: any) {
        event.preventDefault();

        const bank = {
            bankid: this.state.bankid,
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        };

        const url = `http://localhost:8080/app/banks/bank/${this.state.bankid}`;
        Axios.post(url, bank);
        alert(`Added Car Information: ${this.state.bankid} ${this.state.name}`);
    }
    render() {
        return (
            <div>
                <div id="hero-update-bank-information-background">
                    <h1>Bank Information: Update a Bank</h1>
                    <hr></hr>
                    <BankTabsComponent />
                    <br></br>
                    <Container className="update-bank-information-container">
                        <Form>
                            <label>
                                Enter Bank ID No:
<<<<<<< HEAD
                            </label>
                            <br></br>
=======
                            </label><br></br>
>>>>>>> 4bde7c2f2c34fc70706c98d76007d75ee7da4b16
                            <input type="number" className="update-bank-information-input" onChange={(event: any) => this.handleBankIdChange(event)} /><br></br>
                            <label>
                                Bank Name:
                            </label><br></br>
                            <input type="text" className="update-bank-information-input" value={this.state.name} onChange={(event: any) => this.handleNameChange(event)} /><br></br>
                            <label>
                                Address:
                            </label><br></br>
                            <input type="text" className="update-bank-information-input" value={this.state.address} onChange={(event: any) => this.handleAddressChange(event)} /><br></br>
                            <label>
                                City:
                            </label><br></br>
                            <input type="text" className="update-bank-information-input" value={this.state.city} onChange={(event: any) => this.handleCityChange(event)} /><br></br>
                            <label>
                                State
                            </label><br></br>
                            <input type="text" className="update-bank-information-input" value={this.state.state} onChange={(event: any) => this.handleStateChange(event)} /><br></br>
                            <label>
                                Zip Code:
                            </label><br></br>
                            <input type="text" className="update-bank-information-input" value={this.state.zip} onChange={(event: any) => this.handleZipChange(event)} /><br></br><br></br>
                            <button className="btn-dark" onClick={(event: any) => this.handleSubmit(event)}>Submit</button>
                        </Form>
                    </Container>
<<<<<<< HEAD
=======

>>>>>>> 4bde7c2f2c34fc70706c98d76007d75ee7da4b16
                </div>
            </div>
        )
    }
}