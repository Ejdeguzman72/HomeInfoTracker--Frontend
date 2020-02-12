import React from 'react';
import { CardTabsComponent } from '../TabsComponents/CardTabsComponent';
import Axios from 'axios';

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
                    <div id="hero-delete-car-information-background">
                        <h1>Car Information: Delete Car Information</h1>
                        <hr></hr>
                        <CardTabsComponent />
                        <div className="form-row">
                            <input type="number" placeholder="Enter ID to be deleted" value={this.state.cardid} onChange={(event:any) => this.handleChange(event)}/>
                        </div><br></br>
                        <div className="form-row">
                            <button className="btn-dark" onClick={(event:any) => this.handleSubmit(event)}>Delete Car Information</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}