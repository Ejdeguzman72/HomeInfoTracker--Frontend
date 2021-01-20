import React from 'react';
import CarTabsComponent from '../TabsComponents/CarTabsComponent';
import Axios from 'axios';
import { Container, Form } from 'react-bootstrap';

export class DeleteCarInformationComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            carid: 0
        }
    }

    handleChange(event: any) {
        this.setState({
            carid: event.target.value
        });
    }

    handleSubmit(event: any) {
        event.preventDefault();
        alert(`Deleted car with id of ${this.state.carid}`);
        const url = `http://localhost:8080/app/cars//car/${this.state.carid}`;
        Axios.delete(url);
    }

    render() {
        return (
            <div>
                <div id="margin-hero">
                    <div id="hero-delete-car-information-background">
                        <h1>Car Information: Delete Car Information</h1>
                        <hr></hr>
                        <CarTabsComponent />
                        <br></br>
                        <Container className="delete-car-information-container">
                            <Form>
                                <label>
                                    Enter Car ID No:
                                </label><br></br>
                                <input type="number" className="delete-car-information-input" onChange={(event: any) => this.handleChange(event)} />
                                <br></br><br></br>
                                <button className="btn-dark" onClick={(event: any) => this.handleSubmit(event)}>Submit</button>
                            </Form>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
}