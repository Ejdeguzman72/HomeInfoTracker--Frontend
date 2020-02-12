import React from 'react';
import { RepairShopTabsComponent } from '../TabsComponents/RepairShopTabsComponent';
import Axios from 'axios';
import { Table } from 'react-bootstrap';

export class GetAllRepairShops extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            repairShopId: 0,
            shopName: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            repairShops: []
        };
    }

    async componentDidMount() {
        alert("You have retrieved all repair shop information");
        const url = "http://localhost:8080/app/repair-shops/all";

        Axios.get(url).then(payload => {
            this.setState({
                ...this.state,
                repairShops: payload.data.map((o: any) => {
                    return (
                        <tr key={o.repairShopId}>
                            <th scope="row">{o.repairShopId}</th>
                            <th>{o.shopName}</th>
                            <th>{o.address}</th>
                            <th>{o.city}</th>
                            <th>{o.state}</th>
                            <th>{o.zip}</th>
                        </tr>
                    )
                })
            })
        })
    }
    render() {
        return (
            <div>
                <div id="hero-get-all-repair-shop-information-background">
                    <h1>Repair Shop Informaton: Get All Repair Shops</h1>
                    <hr></hr>
                    <RepairShopTabsComponent />
                    <br></br>
                    <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Repair Shop ID No:</th>
                                <td>Shop Name</td>
                                <td>Address</td>
                                <td>City</td>
                                <td>State</td>
                                <td>Zip</td>
                                </tr>
                            </thead>
                            <tbody>
                               {this.state.repairShops}
                            </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}