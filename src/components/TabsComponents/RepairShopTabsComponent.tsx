import React from 'react';
import { Link } from 'react-router-dom';

export class RepairShopTabsComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                 <form>
                   <div id="margin">
                        <div className="form-row">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <Link to="/get-all-repair-shop-information" className="nav-link" href="#" id="tab-link">Get All Repair Shop Information</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/get-repair-shop-information-by-id" className="nav-link" href="#" id="tab-link">Get Repair Shop Information By ID</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/enter-new-repair-shop-information" className="nav-link" href="#" id="tab-link">Enter New Repair Shop Information</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/update-repair-shop-information" className="nav-link" href="#" id="tab-link">Update Repair Shop Information</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="delete-repair-shop-information" className="nav-link" href="#" id="tab-link">Delete Repair Shop Information</Link>
                                </li>
                            </ul>
                        </div>
                   </div>
                </form>
            </div>
        )
    }
}