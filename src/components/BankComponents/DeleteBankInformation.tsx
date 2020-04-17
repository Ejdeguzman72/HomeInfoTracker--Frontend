import React from 'react';
import { BankTabsComponent } from '../TabsComponents/BankTabsComponent';
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
                        <BankTabsComponent />
<<<<<<< HEAD
                        <Container className="delete-bank-information-container">
                            <Form>
                                <label>
                                    Enter Bank ID No:
                                </label>
                                <br></br>
                                <input type="number" placeholder="Enter ID to be deleted" value={this.state.bankid} onChange={(event: any) => this.handleChange(event)} />
                                <br></br><br></br>
                                <Button className="btn-dark" onClick={(event: any) => this.handleSubmit(event)}>Submit</Button>
=======
                        <br></br>
                        <Container className="delete-bank-information-container">
                            <Form>
                                <label>
                                    Enter Bank ID to Delete:
                                </label>
                                <br></br>
                                <input type="number" className="delete-bank-information-input" onChange={(event: any) => this.handleChange(event)} />
                                <br></br><br></br>
                                <Button variant="dark" size="lg" onClick={(event: any) => this.handleSubmit(event)}>Delete Bank Information</Button>
>>>>>>> 4bde7c2f2c34fc70706c98d76007d75ee7da4b16
                            </Form>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
}