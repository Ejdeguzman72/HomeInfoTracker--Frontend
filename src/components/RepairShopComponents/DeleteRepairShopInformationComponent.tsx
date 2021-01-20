import React from 'react';
import RepairShopTabsComponent from '../TabsComponents/RepairShopTabsComponent';
import Axios from 'axios';
import { Container, Form } from 'react-bootstrap';

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
                    <br></br>
                    <Container className="delete-repair-shop-container">
                        <Form>
                            <label>
                                Enter Repair Shop ID No:
                            </label><br></br>
                            <input type="number" className="delete-repair-shop-input" onChange={(event: any) => this.handleChange(event)} />
                            <br></br><br></br>
                            <button className="btn-dark" onClick={(event: any) => this.handleSubmit(event)}>Submit</button>
                        </Form>
                    </Container>
                </div>
            </div>
        )
    }
}