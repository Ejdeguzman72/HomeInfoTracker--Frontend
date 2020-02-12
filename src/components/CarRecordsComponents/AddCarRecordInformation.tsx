import React from 'react';
import { CarRecordsTabsComponent } from '../TabsComponents/CarRecordsTabComponent';
import Axios from 'axios';

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
        Axios.post(`http://localhost:8080/app/car-records/add-a-record`, carRecord );
        alert(`created car record`);
        console.log(carRecord);
    }
    render() {
        return(
            <div>
                <div id="hero-add-car-record-information-background">
                    <h1>Car Record Information: Add Car Record Information</h1>
                    <hr></hr>
                    <CarRecordsTabsComponent />
                        <div className="form-row">
                            <div className="form-group col-md-1">
                                <label>
                                    Amount ($0.00):
                                </label>
                            </div>
                            <div className="form-group col-md-3">
                                <input type="text" placeholder="Enter Amount" value={this.state.amount} onChange={(event: any) => this.handleAmountChange(event)} />
                            </div>
                        </div>
                        <br></br>
                        <div className="form-row">
                            <div className="form-group col-md-1">
                                <label>
                                    Car Job ID:
                                </label>
                            </div>
                            <div className="form-group col-md-3">
                                <input type="text" placeholder="Enter Car Job" value={this.state.carJobId} onChange={(event: any) => this.handleCarJobIdChange(event)} />
                            </div>
                        </div>
                        <br></br>
                        <div className="form-row">
                            <div className="form-group col-md-1">
                                <label>
                                    Repair Shop:
                                </label>
                            </div>
                            <div className="form-group col-md-3">
                                <input type="text" placeholder="Enter Repair Shop" value={this.state.repairShopId} onChange={(event: any) => this.handleRepairShopIdChange(event)} />
                            </div>
                        </div>
                        <br></br>
                        <div className="form-row">
                            <div className="form-group col-md-1 offset-1">
                                <button className="btn-dark" onClick={(event: any) => this.handleSubmit(event)}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}