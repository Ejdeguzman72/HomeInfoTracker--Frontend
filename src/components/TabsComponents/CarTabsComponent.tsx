import React from 'react';
import { Link } from 'react-router-dom';

export class CarTabsComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
               <form>
                   <div id="margin">
                        <div className="form-row">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <Link to="/get-all-Car-information" className="nav-link" href="#" id="tab-link">Get All Car Information</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/get-Car-information-by-id" className="nav-link" href="#" id="tab-link">Get Car Information By ID</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link to="/enter-new-Car-information" className="nav-link" href="#">Enter New Car Information</Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link to="/update-Car-information" className="nav-link" href="#" id="tab-link">Update Car Information</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="delete-Car-information" className="nav-link" href="#" id="tab-link">Delete Car Information</Link>
                                </li>
                            </ul>
                        </div>
                   </div>
                </form>
            </div>
        )
    }
}