import React from 'react';
import { ContactTabsComponent } from '../TabsComponents/ContactTabsComponent';
import { DoctorOfficeTabsComponent } from '../TabsComponents/DoctorOfficeTabsComponent';
import { MedicalRecordsTabsComponent } from '../TabsComponents/MedicalRecordsTabsComponent';

export class MedicalRecordInfomrationComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div id="hero-contact-information-background">
                    <h1>Medical Record Information</h1>
                    <hr></hr>
                    <MedicalRecordsTabsComponent />
                    <br></br>
                    <div id="contact-information-container">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-12 offset-6">
                                    <p id="contact-information-p-border">The following pertains ti doctor office information. 
                                    This consists of name of doctor, office type, location, and 
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}