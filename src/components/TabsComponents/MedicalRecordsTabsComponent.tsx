import React from 'react';
import { Link } from 'react-router-dom';

export class MedicalRecordsTabsComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <form>
                   <div id="margin">
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <Link to="/get-all-medical-record-information" className="nav-link" href="#" id="tab-link">Get All Medical Record Information</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/get-medical-record-information-by-id" className="nav-link" href="#" id="tab-link">Get Medical Record Information By ID</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/enter-new-medical-record-information" className="nav-link" href="#" id="tab-link">Enter Medical Record Information</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/update-medical-record-information" className="nav-link" href="#" id="tab-link">Update Medical Record Information</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="delete-medical-record-information" className="nav-link" href="#" id="tab-link">Delete Medical Record Information</Link>
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