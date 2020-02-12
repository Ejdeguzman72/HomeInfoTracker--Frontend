import React from 'react';
import { RepairShopTabsComponent } from '../TabsComponents/RepairShopTabsComponent';
import Axios from 'axios';

export class UpdateRepairShopInformationComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            repairShopId: 0,
            shopName: "",
            address: "",
            city: "",
            state: "",
            zip: ""
        };
    }

    handleRepairShopIdChange(event: any) {
        this.setState({
            repairShopId: event.target.value
        });
    }

    handleShopNameChange(event: any) {
        this.setState({
            shopName: event.target.value
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

        const repairShop = {
            shopName: this.state.shopName,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        };

        const url = `http://localhost:8080/app/repair-shops/repair-shop/${this.state.repairShopId}`;
        Axios.put(url, repairShop);
        alert(`Updated Repair Shop: ${this.state.shopName}`);
    }
    
    render() {
        return (
            <div>
                <div id="hero-update-repair-shop-information-background">
                    <h1>Repair Shop Information: Update Repair Shop Information</h1>
                    <hr></hr>
                    <RepairShopTabsComponent />
                    <br></br>
                    <div className="form-row">
                        <div className="form-group col-md-2 offset-2">
                            <label>
                                Enter Repair Shop ID:
                            </label>
                        </div>
                        <div className="form-group col-md-3">
                            <input type="number" placeholder="Enter ID" onChange={(event:any) => this.handleRepairShopIdChange(event)} />
                        </div>
                    </div>
                    <br></br>
                    <div className="form-row">
                        <div className="form-group col-md-1">
                            <label>
                                Shop Name:
                            </label>
                        </div>
                        <div className="form-group col-md-3">
                            <input type="text" placeholder="Enter Shop Name" value={this.state.shopName} onChange={(event: any) => this.handleShopNameChange(event)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-1">
                            <label>
                                Address:
                            </label>
                        </div>
                        <div className="form-group col-md-3">
                            <input type="text" placeholder="Enter Address" value={this.state.address} onChange={(event: any) => this.handleAddressChange(event)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-1">
                            <label>
                                City:
                            </label>
                        </div>
                        <div className="form-group col-md-3">
                            <input type="text" placeholder="Enter City" value={this.state.city} onChange={(event: any) => this.handleCityChange(event)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-1">
                            <label>
                                State
                            </label>
                        </div>
                        <div className="form-group col-md-3">
                            <input type="text" placeholder="Enter State" value={this.state.state} onChange={(event: any) => this.handleStateChange(event)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-1">
                            <label>
                                Zip Code:
                            </label>
                        </div>
                        <div className="form-group col-md-3">
                            <input type="text" placeholder="Enter Zip Code" value={this.state.zip} onChange={(event: any) => this.handleZipChange(event)} />
                        </div>
                    </div>
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