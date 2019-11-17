import React from 'react';
import logo from './logo.svg';
import './App.css';
import { EntryHomeComponent } from './components/home-component';
import { CarInformationComponent } from './components/CarComponents/CarInformationComponent'
// import './include/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarComponent } from './components/NavBarComponent';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { CarRecordInformationComponent } from './components/CarRecordsComponents/CarRecordInformationComponent';
import { ContactInfomrationComponent } from './components/ContactsComponents/ContactInformationComponent';
import { TransactionInformationComponent } from './components/TransactionsComponents/TransactionInformationComponent';
import { GetAllCarsComponent }  from './components/CarComponents/GetAllCarsComponent';
import { GetCarByIDComponent } from './components/CarComponents/GetCarByIdComponent';
import { UpdateCarInformationComponent } from './components/CarComponents/UpdateCarInfomrationComponent';
import { DeleteCarInformationComponent } from './components/CarComponents/DeleteCarInfomrationComponent';
import { GetAllCarRecords } from './components/CarRecordsComponents/GetAllCarRecordsComponent';
import { GetCarRecordInformationByIdComponent } from './components/CarRecordsComponents/GetCarRecordInformationByIdComponent';
import { GetAllContactsComponent } from './components/ContactsComponents/GetAllContacts';
import { FindContactByIdComponent } from './components/ContactsComponents/FindContactByIdComponent';
import { CreateContactComponent } from './components/ContactsComponents/CreateContactComponent';
import { UpdateContactInformationComponent } from './components/ContactsComponents/UpdateContactInformationComponet';
import { DeleteContactInformationComponent } from './components/ContactsComponents/DeleteContactInformationComponent';
import { GetAllTransactionsComponent } from './components/TransactionsComponents/GetAllTransactionsComponent';
import { GetTransactionByIdComponent } from './components/TransactionsComponents/GetTransactionByIdComponent';
import { AddTransactionComponent } from './components/TransactionsComponents/AddTransactionComponent';
import { UpdateTransactionInformationComponent } from './components/TransactionsComponents/UpdateTransactionInformationComponent';
import { DeleteTransactionInformationComponent } from './components/TransactionsComponents/DeleteTransactionInformationComponent';
import { AddCarRecordInformationComponent } from './components/CarRecordsComponents/AddCarRecordInformation';
import { UpdateCarRecordInformationComponent } from './components/CarRecordsComponents/UpdateCarRecordInformationComponent';
import { DeleteCarRecordInformation } from './components/CarRecordsComponents/DeleteCarRecordInformationComponent';
import { ToDoListComponent } from './components/FunApplicationComponents/ToDoListComponent';

const App: React.FC = () => {
  return (
    <div>
      <HashRouter>
        <NavBarComponent />
          <Switch>
            <Route path="/home" exact component={EntryHomeComponent} />
            <Route path="/car-information" exact component={CarInformationComponent} />
            <Route path="/get-all-Car-information" component={GetAllCarsComponent} />
            <Route path="/get-car-information-by-id" component={GetCarByIDComponent} />
            <Route path="/update-car-information" component={UpdateCarInformationComponent} />
            <Route path="/delete-car-information" component={DeleteCarInformationComponent} />
            <Route path="/car-record-information" exact component={CarRecordInformationComponent}/>
            <Route path="/get-all-car-record-information" exact component={GetAllCarRecords} />
            <Route path="/get-car-record-information-by-id" exact component={GetCarRecordInformationByIdComponent} />
            <Route path="/enter-new-car-record-information" exact component={AddCarRecordInformationComponent} />
            <Route path="/update-car-record-information" exact component={UpdateCarRecordInformationComponent} />
            <Route path="/delete-car-record-information" exact component={DeleteCarRecordInformation} />
            <Route path="/contact-information" exact component={ContactInfomrationComponent} />
            <Route path="/get-all-contact-information" component={GetAllContactsComponent} />
            <Route path="/get-contact-information-by-id" component={FindContactByIdComponent} />
            <Route path="/create-contact" component={CreateContactComponent} />
            <Route path="/update-contact-information" component={UpdateContactInformationComponent} />
            <Route path="/delete-contact-information" component={DeleteContactInformationComponent} />
            <Route path="/transaction-information" exact component={TransactionInformationComponent} />
            <Route path="/get-all-transactions" exact component={GetAllTransactionsComponent} />
            <Route path="/get-transaction-by-id" exact component={GetTransactionByIdComponent} />
            <Route path="/add-transaction" exact component={AddTransactionComponent} />
            <Route path="/update-transaction" exact component={UpdateTransactionInformationComponent} />
            <Route path="/delete-transaction" exact component={DeleteTransactionInformationComponent} />
            <Route path="/fun-applications" exact component={ToDoListComponent} />
            <Route component={EntryHomeComponent} />
          </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
