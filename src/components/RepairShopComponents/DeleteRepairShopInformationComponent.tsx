import React from 'react';
import { RepairShopTabsComponent } from '../TabsComponents/RepairShopTabsComponent';
import Axios from 'axios';

export class DeleteRepairShopInformationComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            repairShopId: 0
        };
    }

    handleChange(event: any) {
        this.setState({
            repairShopId: event.target.value
        });
    }

    handleSubmit(event: any) {
        event.preventDefault();
        alert(`Deleted repair shop information with id of ${this.state.repairShopId}`);
        const url = `http://localhost:8080/app/repair-shops/repair-shop/${this.state.repairShopId}`;
        Axios.delete(url);
    }
    render() {
        return (
            <div>
                <div id="hero-delete-repair-shop-information-background">
                    <h1>Repair Shop Information: Delete Repair Shop</h1>
                    <hr></hr>
                    <RepairShopTabsComponent />
                    <div className="form-row">
                        <div className="centered">
                            <input type="number" placeholder="Enter ID to be deleted" value={this.state.repairShopId} onChange={(event:any) => this.handleChange(event)} />
                        </div>
                    </div>
                    <br></br>
                    <div className="form-row">
                        <button className="btn-dark" onClick={(event: any) => this.handleSubmit(event)}>Delete Contact Item</button>
                    </div>
                </div>
            </div>
        )
    }
}