import React from 'react';
import CardTabsComponent from '../TabsComponents/CardTabsComponent';
import Axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';

export class DeleteCardInformationComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            cardid: 0
        }
    }

    handleChange(event: any) {
        this.setState({
            cardid: event.target.value
        });
    }

    handleSubmit(event: any) {
        event.preventDefault();
        alert(`Deleted card with id of ${this.state.cardid}`);
        const url = `http://localhost:8080/app/cards/card/${this.state.cardid}`;
        Axios.delete(url);
    }

    render() {
        return (
            <div>
                <div id="margin-hero">
                    <div id="hero-delete-card-information-background">
                        <h1>Card Information: Delete Card Information</h1>
                        <hr></hr>
                        <CardTabsComponent />
                        <br></br>
                        <Container className="delete-card-information-container">
                            <Form>
                                <label>
                                    Enter Card ID Number:
                                </label><br></br>
                                <input type="number" className="delete-card-information-input" onChange={(event: any) => this.handleChange(event)} />
                                <br></br><br></br>
                                <Button variant="dark" className="delete-card-information-input" onClick={(event: any) => this.handleSubmit(event)}>Submit</Button>
                            </Form>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
}