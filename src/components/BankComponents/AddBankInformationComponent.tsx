import React from 'react';
import { BankTabsComponent } from '../TabsComponents/BankTabsComponent';
import Axios from 'axios';

export class AddBankInformationComponent extends React.Component<any, any> {
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
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        };
        
        const url = "http://localhost:8080/app/banks/add-a-bank";
        Axios.post(url, bank);
        alert(`Added Bank Information: ${this.state.name}`);
    }
    render() {
        return (
            <div>
                <div id="hero-add-bank-information-background">
                    <h1>Bank Information: Add a Bank</h1>
                    <hr></hr>
                    <BankTabsComponent />
                    <br></br>
                    <div className="form-row">
                        <div className="form-group col-md-1">
                            <label>
                                Bank Name:
                            </label>
                        </div>
                        <div className="form-group col-md-3">
                            <input type="text" placeholder="Enter Bank Name" value={this.state.name} onChange={(event: any) => this.handleNameChange(event)} />
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
                            <input type="text" placeholder="Zip" value={this.state.zip} onChange={(event: any) => this.handleZipChange(event)} />
                        </div>
                    </div>
                    <button className="btn-dark" onClick={(event: any) => this.handleSubmit(event)}>Submit</button>
                </div>
            </div>
        )
    }
}