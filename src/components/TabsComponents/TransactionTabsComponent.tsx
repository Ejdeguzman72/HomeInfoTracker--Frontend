import React from 'react';
import { Link } from 'react-router-dom';

export class TransactionTabsComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
              <form>
                   <div id="margin">
                        <div className="form-row">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <Link to="/get-all-transactions" className="nav-link" href="#" id="tab-link">Get All Transaction Information</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/get-transaction-by-id" className="nav-link" href="#" id="tab-link">Get Transaction Information By ID</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/add-transaction" className="nav-link" href="#" id="tab-link">Enter New Transaction Information</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/update-transaction" className="nav-link" href="#" id="tab-link">Update Transaction Information</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link to="delete-transaction" className="nav-link" href="#">Delete Transaction Information</Link>
                                </li> */}
                            </ul>
                        </div>
                   </div>
                </form>
            </div>
        )
    }
}