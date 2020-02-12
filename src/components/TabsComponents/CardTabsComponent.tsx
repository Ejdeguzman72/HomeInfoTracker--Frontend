import React from 'react';
import { Link } from 'react-router-dom';

export class CardTabsComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <form>
                   <div id="margin">
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <Link to="/get-all-card-information" className="nav-link" href="#" id="tab-link">Get All Card Information</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/get-card-information-by-id" className="nav-link" href="#" id="tab-link">Get Card Information By ID</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/enter-new-card-information" className="nav-link" href="#" id="tab-link">Enter New Card Information</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/update-card-information" className="nav-link" href="#" id="tab-link">Update Card Information</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="delete-card-information" className="nav-link" href="#" id="tab-link">Delete Card Information</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                   </div>
                </form>
            </div>
        )
    }
}