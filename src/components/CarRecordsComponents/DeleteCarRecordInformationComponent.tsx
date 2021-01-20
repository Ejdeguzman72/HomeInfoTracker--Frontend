import React from 'react';
import CarRecordsTabsComponent from '../TabsComponents/CarRecordsTabComponent';
import Axios from 'axios';
import { Container, Form } from 'react-bootstrap';

export class DeleteCarRecordInformation extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            carRecordId: 0
        }
    }

    handleChange(event: any) {
        this.setState({
            carRecordId: event.target.value
        });
    }

    handleSubmit(event: any) {
        event.preventDefault();
        alert(`Deleted car record item of id ${this.state.carRecordId}`);
        const url = `http://localhost:8080/app/car-records/car-record/${this.state.carRecordId}`;
        Axios.delete(url);
    }

    render() {
        return (
            <div>
                <div id="hero-delete-car-record-information-background">
                    <h1>Car Record Information: Delete Car Record Information</h1>
                    <hr></hr>
                    <CarRecordsTabsComponent />
                    <br></br>
                    <Container className="delete-car-record-information-container">
                        <Form>
                            <label>
                                Enter Car Record ID No:
                            </label>
                            <br></br>
                            <input type="number" className="delete-car-record-information-input" onChange={(event: any) => this.handleChange(event)} />
                            <br></br><br></br>
                            <button className="btn-dark" onClick={(event: any) => this.handleSubmit(event)}>Delete Car Record Information</button>
                        </Form>
                    </Container>
                </div>
            </div>
        )
    }
}