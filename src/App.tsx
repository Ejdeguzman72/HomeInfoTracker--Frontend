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
import { GetAllCarsComponent }  from './components/CarComponents/GetAllCarsComponent';
import { GetCarByIDComponent } from './components/CarComponents/GetCarByIdComponent';
import { AddCarInformationComponent } from './components/CarComponents/AddCarInformationComponent';
import { UpdateCarInformationComponent } from './components/CarComponents/UpdateCarInfomrationComponent';
import { DeleteCarInformationComponent } from './components/CarComponents/DeleteCarInfomrationComponent';
import { GetAllCarRecords } from './components/CarRecordsComponents/GetAllCarRecordsComponent';
import { GetCarRecordInformationByIdComponent } from './components/CarRecordsComponents/GetCarRecordInformationByIdComponent';
import { GetAllCardInformationComponent } from './components/CardComponents/GetAllCardInformationComponent';
import { GetAllContactsComponent } from './components/ContactsComponents/GetAllContacts';
import { FindContactByIdComponent } from './components/ContactsComponents/FindContactByIdComponent';
import { AddCardComponent } from './components/CardComponents/AddCardComponent';
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
import { CardInformationComponent } from './components/CardComponents/CardInformationComponent';
import { ToDoListComponent } from './components/FunApplicationComponents/ToDoListComponent';
import { FunApplicationComponent } from './components/FunApplicationComponents/FunApplicationComponent';
import { RepairShopInformationComponent } from './components/RepairShopComponents/RepairShopInformatonComponent';
import { GetAllRepairShops } from './components/RepairShopComponents/GetAllRepairShops';
import { GetRepairShopByIdComponent } from './components/RepairShopComponents/GetRepairShopByIdComponent';
import { CreateRepairShopComponent } from './components/RepairShopComponents/CreateRepairShopComponent';
import { UpdateRepairShopInformationComponent } from './components/RepairShopComponents/UpdateRepairShopInformationComponent';
import { DeleteRepairShopInformationComponent } from './components/RepairShopComponents/DeleteRepairShopInformationComponent';
import { GetCardInformationByIdComponent } from './components/CardComponents/GetCardByIdComponent';
import { DeleteCardInformationComponent } from './components/CardComponents/DeleteCardInformationComponent';
import { UpdateCardComponent } from './components/CardComponents/UpdateCardComponent';
import { DoctorOfficeInfomrationComponent } from './components/DoctorOfficeComponets/DoctorOfficeInformationComponent';
import { MedicalRecordInfomrationComponent } from './components/MedicalRecordComponets/MedicalRecordInformationComponent';
import { GetAllMedicalRecordsComponent } from './components/MedicalRecordComponets/GetAllMedicalRecordsInformationComponent';
import { GetAllDoctorOfficeInformationComponent } from './components/DoctorOfficeComponets/GetAllDoctorOfficeInformationComponent';
import { GetDoctorOfficeByIdComponent } from './components/DoctorOfficeComponets/GetDoctorOfficeByIdComponent';
import { GetMedicalRecordByIdComponent } from './components/MedicalRecordComponets/GetMedicalRecordByIdComponent';
import { AddDoctorOfficeComponent } from './components/DoctorOfficeComponets/AddDoctorOfficeComponent';
import { UpdateDoctorOfficeInformationComponent } from './components/DoctorOfficeComponets/UpdateDoctorOfficeInformationComponent';
import { CreateMedicalRecordComponent } from './components/MedicalRecordComponets/AddMedicalRecordComponent';
import { UpdatedMedicalRecordInformationComponent } from './components/MedicalRecordComponets/UpdateMedicalRecordInformationComponent';
import { GetAllBankInformationComponent } from './components/BankComponents/GetAllBankInformationComponent';
import { BankInformationComponent } from './components/BankComponents/BankInformationComponent';
import { GetBankByIDComponent } from './components/BankComponents/GetBankByIdComponent';
import {AddBankInformationComponent } from './components/BankComponents/AddBankInformationComponent';
import { UpdateBankInformationComponent } from './components/BankComponents/UpdateBankInformationComponent';
import { DeleteBankInformationComponent } from './components/BankComponents/DeleteBankInformation';
import  LoginComponent  from './components/LoginComponent/LoginComponent';
import { EntryHomeComponent } from './components/HomeComponent/home-component';

const App: React.FC = () => {
  return (
    <div>
      <HashRouter>
        <NavBarComponent />
          <Switch>
            <Route path="/home" exact component={EntryHomeComponent} />

            {/*Login Route */}
            <Route path="/login" exact component={LoginComponent} />
            
            {/* Car Routes*/}
            <Route path="/car-information" exact component={CarInformationComponent} />
            <Route path="/get-all-Car-information" component={GetAllCarsComponent} />
            <Route path="/get-car-information-by-id" component={GetCarByIDComponent} />
            <Route path="/enter-new-car-information" exact component={AddCarInformationComponent} />
            <Route path="/update-car-information" component={UpdateCarInformationComponent} />
            <Route path="/delete-car-information" component={DeleteCarInformationComponent} />

            {/* Car Record Routes*/}
            <Route path="/car-record-information" exact component={CarRecordInformationComponent}/>
            <Route path="/get-all-car-record-information" exact component={GetAllCarRecords} />
            <Route path="/get-car-record-information-by-id" exact component={GetCarRecordInformationByIdComponent} />
            <Route path="/enter-new-car-record-information" exact component={AddCarRecordInformationComponent} />
            <Route path="/update-car-record-information" exact component={UpdateCarRecordInformationComponent} />
            <Route path="/delete-car-record-information" exact component={DeleteCarRecordInformation} />

            {/* Card Routes*/}
            <Route path="/card-information" exact component={CardInformationComponent} />
            <Route path="/get-all-card-information" exact component={GetAllCardInformationComponent} />
            <Route path="/get-card-information-by-id" exact component={GetCardInformationByIdComponent} />
            <Route path="/enter-new-card-information" exact component={AddCardComponent} />
            <Route path="/update-card-information" exact component={UpdateCardComponent} />
            <Route path="/delete-card-information" exact component={DeleteCardInformationComponent} />

            {/* Contact Routes*/}
            <Route path="/contact-information" exact component={ContactInfomrationComponent} />
            <Route path="/app/contact-book/all" component={GetAllContactsComponent} />
            <Route path="/get-contact-information-by-id" component={FindContactByIdComponent} />
            <Route path="/create-contact" component={CreateContactComponent} />
            <Route path="/update-contact-information" component={UpdateContactInformationComponent} />
            <Route path="/delete-contact-information" component={DeleteContactInformationComponent} />

            {/* Transaction Routes*/}
            <Route path="/transaction-information" exact component={TransactionInformationComponent} />
            <Route path="/get-all-transactions" exact component={GetAllTransactionsComponent} />
            <Route path="/get-transaction-by-id" exact component={GetTransactionByIdComponent} />
            <Route path="/add-transaction" exact component={AddTransactionComponent} />
            <Route path="/update-transaction" exact component={UpdateTransactionInformationComponent} />
            <Route path="/delete-transaction" exact component={DeleteTransactionInformationComponent} />

            {/* Repair Shop Routes*/}
            <Route path="/repair-shop-information" exact component={RepairShopInformationComponent} />
            <Route path="/get-all-repair-shop-information" exact component={GetAllRepairShops} />
            <Route path="/get-repair-shop-information-by-id" exact component={GetRepairShopByIdComponent} />
            <Route path="/enter-new-repair-shop-information" exact component={CreateRepairShopComponent} />
            <Route path="/update-repair-shop-information" exact component={UpdateRepairShopInformationComponent} />
            <Route path="/delete-repair-shop-information" exact component={DeleteRepairShopInformationComponent} />

            {/* Doctor Office Information Routes */}
            <Route path="/doctor-office-information" exact component={DoctorOfficeInfomrationComponent} />
            <Route path="/get-all-doctor-office-information" exact component={GetAllDoctorOfficeInformationComponent} />
            <Route path="/get-doctor-office-information-by-id" exact component={GetDoctorOfficeByIdComponent} />
            <Route path="/enter-new-doctor-office-information" exact component={AddDoctorOfficeComponent} />
            <Route path="/update-doctor-office-information" exact component={UpdateDoctorOfficeInformationComponent} />
            <Route path="/delete-doctor-office-information" exact component={DeleteRepairShopInformationComponent} />

            {/* Medical Record Inforation Routes */}
            <Route path="/medical-record-information" exact component={MedicalRecordInfomrationComponent} />
            <Route path="/get-all-medical-record-information" exact component={GetAllMedicalRecordsComponent} />
            <Route path="/get-medical-record-information-by-id" exact component={GetMedicalRecordByIdComponent} />
            <Route path="/enter-new-medical-record-information" exact component={CreateMedicalRecordComponent} />
            <Route path="/update-medical-record-information" exact component={UpdatedMedicalRecordInformationComponent} />
            <Route path="/delete-medical-record-information" exact component={DeleteRepairShopInformationComponent} />

            {/*Bank Information Routes */}
            <Route path="/bank-information" exact component={BankInformationComponent} />
            <Route path="/get-all-bank-information" exact component={GetAllBankInformationComponent} />
            <Route path="/get-bank-information-by-id" exact component={GetBankByIDComponent} />
            <Route path="/enter-new-bank-information" exact component={AddBankInformationComponent} />
            <Route path="/update-bank-information" exact component={UpdateBankInformationComponent} />
            <Route path="/delete-bank-information" exact component={DeleteBankInformationComponent} />

            {/* <Route path="/fun-applications" exact component={FunApplicationComponent} />
            <Route path="/to-do-list" exact component={ToDoListComponent} /> */}
            <Route component={LoginComponent} />
          </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
