import React from 'react';
import { RepairShopTabsComponent } from '../TabsComponents/RepairShopTabsComponent';
import Axios from 'axios';
import { Table, Container, Form } from 'react-bootstrap';

export class GetRepairShopByIdComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            repairShopId: 0,
            shopName: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            repairShop: []
        };
    }

    handleChange(event: any) {
        const value = event.target.value;
        this.setState({
            ...this.state,
            repairShopId: value
        });
    }

    handleSubmit() {
        const url = `http://localhost:8080/app/repair-shops/repair-shop/${this.state.repairShopId}`;
        Axios.get(url).then(payload => {
            this.setState({
                ...this.state,
                repairShop: (
                    <tr key={this.state.repairShopId}>
                        <th>{payload.data.repairShopId}</th>
                        <th>{payload.data.shopName}</th>
                        <th>{payload.data.address}</th>
                        <th>{payload.data.city}</th>
                        <th>{payload.data.state}</th>
                        <th>{payload.data.zip}</th>
                    </tr>
                )
            })
        })
        alert(`You have retrieved the repair shop with id of: ${this.state.repairShopId}`);
    }
    render() {
        return (
            <div>
                <div id="hero-get-repair-shop-information-by-id-background">
                    <h1>Repair Shop Information: Get Repair Shop By ID Number</h1>
                    <hr></hr>
                    <RepairShopTabsComponent />
                    <br></br>
                    <Container className="get-repair-shop-by-id-container"> 
                        <Form>
                            <label>
                                Enter Repair Shop ID No:
                            </label><br></br>
                            <input type="number" className="get-repair-shop-by-id-input" onChange={(event: any) => this.handleChange(event)}/>
                            <br></br><br></br>
                            <button className="btn-dark" onClick={() => this.handleSubmit()}>Submit</button>
                        </Form>
                    </Container>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Zip</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.repairShop}
                        </tbody>
                    </Table>    
                </div>
            </div>
        )
    }
}