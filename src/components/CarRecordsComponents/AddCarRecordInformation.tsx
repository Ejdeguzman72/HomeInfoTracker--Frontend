import React from 'react';
import CarRecordsTabsComponent from '../TabsComponents/CarRecordsTabComponent';
import Axios from 'axios';
import { Container, Form } from 'react-bootstrap';

export class AddCarRecordInformationComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            carRecordId: 0,
            amount: 0,
            carJobId: 0,
            repairShopId: 0
        }
    }

    handleAmountChange(event: any) {
        this.setState({
            amount: event.target.value
        });
    }

    handleCarJobIdChange(event: any) {
        this.setState({
            carJobId: event.target.value
        });
    }

    handleRepairShopIdChange(event: any) {
        this.setState({
            repairShopId: event.target.value
        });
    }

    handleSubmit(event: any) {
        event.preventDefault();
        const carRecord = {
            carRecordId: this.state.carRecordId,
            amount: this.state.amount,
            carJobId: this.state.carJobId,
            repairShopId: this.state.repairShopId
        };
        // const url = (`http://localhost:8080/app/car-records/add-a-record`);
        Axios.post(`http://localhost:8080/app/car-records/add-a-record`, carRecord);
        alert(`created car record`);
        console.log(carRecord);
    }
    render() {
        return (
            <div>
                <div id="hero-add-car-record-information-background">
                    <h1>Car Record Information: Add Car Record Information</h1>
                    <hr></hr>
                    <CarRecordsTabsComponent />
                    <br></br>
                    <Container className="add-car-record-information-container">
                        <Form>

                            <label>
                                Amount ($0.00):
                                </label>
                            <br></br>
                            <input type="text" className="add-car-record-information-input" onChange={(event: any) => this.handleAmountChange(event)} />
                            <br></br>
                            <label>
                                Car Job ID:
                            </label>
                            <br></br>
                            <input type="text" className="add-car-record-information-input" onChange={(event: any) => this.handleCarJobIdChange(event)} />
                            <br></br>
                            <label>
                                Repair Shop:
                            </label>
                            <br></br>
                            <input type="text" className="add-car-record-information-input" onChange={(event: any) => this.handleRepairShopIdChange(event)} />
                            <br></br><br></br>
                            <button className="btn-dark" onClick={(event: any) => this.handleSubmit(event)}>Submit</button>
                        </Form>
                    </Container>

                </div>
            </div>
        )
    }
}