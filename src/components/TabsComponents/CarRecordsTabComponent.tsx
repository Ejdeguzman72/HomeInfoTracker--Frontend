import React from 'react';
import { Link } from 'react-router-dom';

export class CarRecordsTabsComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <form>
                   <div id="margin">
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <Link to="/get-all-car-record-information" className="nav-link" href="#" id="tab-link">Get All Car Record Information</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/get-car-record-information-by-id" className="nav-link" href="#" id="tab-link">Get Car RecordInformation By ID</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/enter-new-car-record-information" className="nav-link" href="#" id="tab-link">Enter New Car RecordInformation</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/update-car-record-information" className="nav-link" href="#" id="tab-link">Update Car RecordInformation</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="delete-car-record-information" className="nav-link" href="#" id="tab-link">Delete Car RecordInformation</Link>
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