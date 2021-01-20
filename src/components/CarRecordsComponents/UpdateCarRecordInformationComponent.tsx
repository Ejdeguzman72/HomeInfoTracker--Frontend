import React from 'react';
import CarRecordsTabsComponent from '../TabsComponents/CarRecordsTabComponent';
import Axios from 'axios';
import { Container, Form } from 'react-bootstrap';

export class UpdateCarRecordInformationComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            carRecordId: 0,
            amount: 0,
            carJobId: 0,
            repairShopId: 0
        }
    }

    handleCarRecordIdChange(event: any) {
        this.setState({
            carRecordId: event.target.value
        });
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
        const url = (`http://localhost:8080/app/car-records/car-record/${this.state.carRecordId}`);
        Axios.put(url, carRecord);
        alert(`created car record`);
        console.log(carRecord);
    }
    render() {
        return (
            <div>
                <div id="hero-update-car-record-information-background">
                    <h1>Car Record Information: Update Car Record Information</h1>
                    <hr></hr>
                    <CarRecordsTabsComponent />
                    <Container className="update-car-record-information-container">
                        <Form>
                        <label>
                        Car Record ID:
                    </label>
                    <input type="number" className="update-car-record-information-input" onChange={(event: any) => this.handleCarRecordIdChange(event)} />
                    <hr></hr>
                    <label>
                        Amount ($0.00):
                    </label><br></br>
                    <input type="text" className="update-car-record-information-input" onChange={(event: any) => this.handleAmountChange(event)} />
                    <br></br>
                    <label>
                        Car Job ID:
                    </label><br></br>
                    <input type="text" className="update-car-record-information-input" onChange={(event: any) => this.handleCarJobIdChange(event)} />
                    <br></br>
                    <label>
                        Repair Shop:
                    </label><br></br>
                    <input type="text" className="update-car-record-information-input" onChange={(event: any) => this.handleRepairShopIdChange(event)} />
                    <br></br><br></br>
                    <button className="btn-dark" onClick={(event: any) => this.handleSubmit(event)}>Submit</button>
                        </Form>
                    </Container>
                </div>
            </div>
        )
    }
}