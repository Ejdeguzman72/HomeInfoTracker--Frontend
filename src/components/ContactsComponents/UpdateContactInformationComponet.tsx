import React from 'react';
import { ContactTabsComponent } from '../TabsComponents/ContactTabsComponent';
import Axios from 'axios';

export class UpdateContactInformationComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            contactid: 0,
            firstname: "",
            lastname: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            phone: "",
            email: "" 
        }
    }

    handleContactIdChange(event:any) {
        this.setState({
            contactid: event.target.value
        });
    }

    handleFirstNameChange(event:any) {
        this.setState({
            firstname: event.target.value
        });
    }

    handleLastNameChange(event: any) {
        this.setState({
            lastname: event.target.value
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

    handlePhoneChange(event: any) {
        this.setState({
            phone: event.target.value
        })
    }

    handleEmailChange(event: any) {
        this.setState({
            email: event.target.value
        })
    }
    handleSubmit(event: any) {
        event.preventDefault();
        const contact = {
            contactid: this.state.contactid,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            phone: this.state.phone,
            email: this.state.email
        }
        const url = (`http://localhost:8080/app/contact-book/contact/${this.state.contactid}`);
        Axios.put(url, contact);
        alert(`Updated New Contact: ${this.state.firstname} ${this.state.lastname}`);
    }
    render() {
        return (
            <div>
                <div id="margin-hero">
                    <div id="hero-update-contact-information-background">
                        <h1>Contact Information: Update Contact Information</h1>
                        <hr></hr>
                        <ContactTabsComponent />
                        <div className="form-row">
                            <div className="form-group col-md-4 offset-2">
                                <label>
                                    Contact ID: 
                                </label>                   
                                <input type="number" placeholder="Enter Contact ID" value={this.state.contactid} onChange={(event: any) => this.handleContactIdChange(event)} />
                            </div>
                        </div>                         
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label>
                                    First Name: 
                                </label>                   
                                <input type="text" placeholder="Enter First Name" value={this.state.firstname} onChange={(event: any) => this.handleFirstNameChange(event)} />
                            </div>
                            <div className="form-grou[ col-md-4">
                                <label>
                                    Last Name:
                                </label>
                                <input type="text" placeholder="Enter Last Name" value={this.state.lastname} onChange={(event: any) => this.handleLastNameChange(event)} />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label>
                                    Address:
                                </label>
                                <input type="text" placeholder="Enter Address" value={this.state.address} onChange={(event: any) => this.handleAddressChange(event)} />
                            </div>
                            <div className="form-grou[ col-md-4">
                                <label>
                                    City:
                                </label>
                                <input type="text" placeholder="Enter City" value={this.state.city} onChange={(event: any) => this.handleCityChange(event)} />
                            </div>  
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label>
                                    State:
                                </label>
                                <input type="text" placeholder="Enter State" value={this.state.state} onChange={(event: any) => this.handleStateChange(event)} />
                            </div>
                            <div className="form-grou[ col-md-4">
                                <label>
                                    Zip Code:
                                </label>
                                <input type="text" placeholder="Enter Zip Code" value={this.state.zip} onChange={(event: any) => this.handleZipChange(event)} />
                            </div>                   
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label>
                                    Phone Number:
                                </label>
                                <input type="text" placeholder="Enter Phone" value={this.state.phone} onChange={(event: any) => this.handlePhoneChange(event)} />
                            </div>
                            <div className="form-grou[ col-md-4">
                            <label>
                                Email Address: 
                            </label>
                            <input type="text" placeholder="Enter Email" value={this.state.email} onChange={(event: any) => this.handleEmailChange(event)} />                    
                        </div>
                        <br></br><br></br>
                        </div>
                        <button className="btn-dark" onClick={(event: any) => this.handleSubmit(event)}>Submit</button>
                        </div>
                    
                </div>
            </div>
        )
    }
}