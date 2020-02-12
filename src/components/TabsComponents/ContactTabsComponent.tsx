import React from 'react';
import { Link } from 'react-router-dom';

export class ContactTabsComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
               <form>
                   <div id="margin">
                        <div className="form-row">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <Link to="/app/contact-book/all" className="nav-link" href="#" id="tab-link">Get All Contact Information</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/get-contact-information-by-id" className="nav-link" href="#" id="tab-link">Get Contact Information By ID</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/create-contact" className="nav-link" href="#" id="tab-link">Enter New Contact Information</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/update-contact-information" className="nav-link" href="#" id="tab-link">Update Contact Information</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="delete-contact-information" className="nav-link" href="#" id="tab-link">Delete Contact Information</Link>
                                </li>
                            </ul>
                        </div>
                   </div>
                </form>
            </div>
        )
    }
}