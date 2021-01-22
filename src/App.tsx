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

const App: React.FC = () => {
  return (
    <div>
      <HashRouter>
        <NavBarComponent />
          <Switch>

            {/* Home Component */}
            <Route path="/home" exact component={EntryHomeComponent} />

            {/*Login Route */}
            <Route path="/login" exact component={LoginComponent} />
            
            {/* Car Routes*/}
            <Route path="/car-information" exact component={CarInformationComponent} />

            {/* Car Record Routes*/}
            <Route path="/car-record-information" exact component={CarRecordInformationComponent}/>

            {/* Card Routes*/}
            <Route path="/card-information" exact component={CardInformationComponent} />

            {/* Contact Routes*/}
            <Route path="/contact-information" exact component={ContactInfomrationComponent} />

            {/* Transaction Routes*/}
            <Route path="/transaction-information" exact component={TransactionInformationComponent} />

            {/* Repair Shop Routes*/}
            {/* <Route path="/repair-shop-information" exact component={RepairShopInformationComponent} /> */}

            {/* Doctor Office Information Routes */}
            <Route path="/doctor-office-information" exact component={DoctorOfficeInfomrationComponent} />

            {/* Medical Record Inforation Routes */}
            <Route path="/medical-record-information" exact component={MedicalRecordInfomrationComponent} />

            {/*Bank Information Routes */}
            <Route path="/bank-information" exact component={BankInformationComponent} />

            {/* Fun Applications */}
            <Route path="/fun-applications" exact component={FunApplicationComponent} />
            <Route path="/to-do-list" exact component={ToDoListComponent} />


            {/* Starting Component */}
            <Route component={LoginComponent} />
          </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
