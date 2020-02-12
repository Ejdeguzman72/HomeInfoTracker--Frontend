import React from 'react';
import { Link } from 'react-router-dom';

export class DoctorOfficeTabsComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <form>
                   <div id="margin">
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <Link to="/get-all-doctor-office-information" className="nav-link" href="#" id="tab-link">Get All Doctor Office Information</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/get-doctor-office-information-by-id" className="nav-link" href="#" id="tab-link">Get Doctor Office Information By ID</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/enter-new-doctor-office-information" className="nav-link" href="#" id="tab-link">Enter Doctor Office Information</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/update-doctor-office-information" className="nav-link" href="#" id="tab-link">Update Doctor Office Information</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="delete-doctor-office-information" className="nav-link" href="#" id="tab-link">Delete Doctor Office Information</Link>
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