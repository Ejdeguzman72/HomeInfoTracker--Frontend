import React from 'react';
import { Link } from 'react-router-dom';

export class BankTabsComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <form>
                   <div id="margin">
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <Link to="/get-all-bank-information" className="nav-link" href="#" id="tab-link">Get All Bank Information</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/get-bank-information-by-id" className="nav-link" href="#" id="tab-link">Get Bank Information By ID</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/enter-new-bank-information" className="nav-link" href="#" id="tab-link">Enter New Bank Information</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/update-bank-information" className="nav-link" href="#" id="tab-link">Update Bank Information</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="delete-bank-information" className="nav-link" href="#" id="tab-link">Delete Bank Information</Link>
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