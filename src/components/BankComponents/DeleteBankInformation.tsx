import React from 'react';
import BankTabComponent from '../TabsComponents/BankTabsComponent';
import Axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';

export class DeleteBankInformationComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            bankid: 0
        }
    }

    handleChange(event: any) {
        this.setState({
            bankid: event.target.value
        });
    }

    handleSubmit(event: any) {
        event.preventDefault();
        alert(`Deleted bank with id of ${this.state.bankid}`);
        const url = `http://localhost:8080/app/banks/bank/${this.state.bankid}`;
        Axios.delete(url);
    }

    render() {
        return (
            <div>
                <div id="margin-hero">
                    <div id="hero-delete-car-information-background">
                        <h1>Bank Information: Delete Bank Information</h1>
                        <hr></hr>
                        {/* <BankTabsComponent /> */}
                        <Container className="delete-bank-information-container">
                            <Form>
                                <label>
                                    Enter Bank ID No:
                                </label>
                                <br></br>
                                <input type="number" className="delete-bank-information-input" onChange={(event: any) => this.handleChange(event)} />
                                <br></br><br></br>
                                <Button className="btn-dark" onClick={(event: any) => this.handleSubmit(event)}>Submit</Button>
                            </Form>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
}