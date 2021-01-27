import React from 'react';
import './App.css';
import { CarInformationComponent } from './components/CarComponents/CarInformationComponent'
// import './include/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarComponent } from './components/NavBarComponent';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { CarRecordInformationComponent } from './components/CarRecordsComponents/CarRecordInformationComponent';
import { ContactInfomrationComponent } from './components/ContactsComponents/ContactInformationComponent';
import { TransactionInformationComponent } from './components/TransactionsComponents/TransactionInformationComponent';
import { CardInformationComponent } from './components/CardComponents/CardInformationComponent';
import { ToDoListComponent } from './components/FunApplicationComponents/ToDoListComponent';
import { FunApplicationComponent } from './components/FunApplicationComponents/FunApplicationComponent';
// import { RepairShopInformationComponent } from './components/RepairShopComponents/RepairShopInformatonComponent';
import { DoctorOfficeInfomrationComponent } from './components/DoctorOfficeComponets/DoctorOfficeInformationComponent';
import { MedicalRecordInfomrationComponent } from './components/MedicalRecordComponets/MedicalRecordInformationComponent';
import { BankInformationComponent } from './components/BankComponents/BankInformationComponent';
import  LoginComponent  from './components/LoginComponent/LoginComponent';
import { EntryHomeComponent } from './components/HomeComponent/home-component';
import { MediaPageComponent } from './components/Media-Components/media-page-component/MediaPageComponent';
import { CarRecordUploadComponent } from './components/File-Upload-Components/CarRecordUploadComponent';
import CarRecordUploadPageComponent from './components/CarRecordsComponents/CarRecordUploadPageComponent';
import { PhotoUploadPageComponent } from './components/Media-Components/photo-upload-page-component/photo-upload-page-component';
import { PhotoPageComponent } from './components/Media-Components/photo-page-component/photo-page-component';
import { VideoPageComponent } from './components/Media-Components/video-page-component/video-page-component';
import { VideoUploadPageComponent } from './components/Media-Components/video-upload-page-component/video-upload-page-component';
import { getJwt } from './helper/jwt';
import TransactionUploadPageComponent from './components/TransactionsComponents/TransactionUploadPageComponent';
import MedicalRecordUploadPageComponent from './components/MedicalRecordComponets/MedicalRecordUploadPageComponent';

const jwt = getJwt();

const App: React.FC = () => {
  return (
    <div>
      <HashRouter>
        <NavBarComponent />
          <Switch>

            {/* Home Component */}
            {
              jwt ?
              <Route path="/home" exact component={EntryHomeComponent} /> : null
            }

            {/*Login Route */}
            {
              jwt ?
              <Route path="/login" exact component={LoginComponent} /> : null
            }
            
            {/* Car Routes*/}
            {
              jwt ?
              <Route path="/car-information" exact component={CarInformationComponent} /> : null
            }

            {/* Car Record Routes*/}
            {
              jwt ?
              <Route path="/car-record-information" exact component={CarRecordInformationComponent}/> : null
            }
            {
              jwt ?
              <Route path="/car-record-uploads" exact component={CarRecordUploadPageComponent} /> : null
            }

            {/* Card Routes*/}
            {
              jwt ?
              <Route path="/card-information" exact component={CardInformationComponent} /> : null
            }

            {/* Contact Routes*/}
            {
              jwt ?
              <Route path="/contact-information" exact component={ContactInfomrationComponent} /> : null
            }

            {/* Transaction Routes*/}
            {
              jwt ?
              <Route path="/transaction-information" exact component={TransactionInformationComponent} /> : null
            }
            {
              jwt ?
              <Route path="/transaction-uploads" exact component={TransactionUploadPageComponent} /> : null
            }
            {/* Repair Shop Routes*/}
            {/* <Route path="/repair-shop-information" exact component={RepairShopInformationComponent} /> */}

            {/* Doctor Office Information Routes */}
            {
              jwt ?
              <Route path="/doctor-office-information" exact component={DoctorOfficeInfomrationComponent} /> : null
            }

            {/* Medical Record Inforation Routes */}
            {
              jwt ?
              <Route path="/medical-record-information" exact component={MedicalRecordInfomrationComponent} /> : null
            }
            {
              jwt ? 
              <Route path="/medical-record-uploads" exact component={MedicalRecordUploadPageComponent} /> : null
            }
            {/*Bank Information Routes */}
            {
              jwt ?
              <Route path="/bank-information" exact component={BankInformationComponent} /> : null
            }

            {/* Fun Applications */}
            {
              jwt ?
              <Route path="/fun-applications" exact component={FunApplicationComponent} /> : null
            }
            {
              jwt ?
              <Route path="/to-do-list" exact component={ToDoListComponent} /> : null
            }
            {
              jwt ?
              <Route path="/media" exact component={MediaPageComponent} /> : null
            }
            {
              jwt ?
              <Route path="/photos" exact component={PhotoPageComponent} /> : null
            }
            {
              jwt ?
              <Route path="/photo-uploads" exact component={PhotoUploadPageComponent} /> : null
            }
            {
              jwt ?
              <Route path="/videos" exact component={VideoPageComponent} /> : null
            }
            {
              jwt ?
              <Route path="/video-uploads" exact component={VideoUploadPageComponent} /> : null
            }

            {/* Starting Component */}
            <Route component={LoginComponent} />
          </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
