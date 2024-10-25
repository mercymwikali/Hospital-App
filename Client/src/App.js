import logo from './logo.svg';
import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import MainLayout from "./components/MainLayout";
import Error from "./pages/Error";
import Forgetpassword from "./pages/Forgetpassword";
import Resetpassword from "./pages/Resetpassword";
import Dashboard from "./pages/Dashboard";
import PatientReg from "./pages/PatientReg";
import Patientlist from "./pages/Patientlist";
import AddAppointment from "./pages/AddAppointment";
import Appointmentlist from "./pages/Appointmentlist";
import Dispatchedlist from "./pages/Dispatchedlist";
import Observationlist from "./pages/Observationlist";
import Walkin from "./pages/Walkin";
import Procedurequeues from "./pages/Procedurequeues";
import Dispatchedobservationlist from "./pages/Dispatchedobservationlist";
import Outpatientvisits from "./pages/Outpatientvisits";
import Inpatient from "./pages/Inpatient";
import PastDocvisits from "./pages/PastDocvisits";
import PatientAdmn from "./pages/PatientAdmn";
import Anaesthetistia from "./pages/Anaesthetistia";
import MCHoutpatient from "./pages/MCHoutpatient";
import Theatreday from "./pages/Theatreday";
import Surgeon from "./pages/Surgeon";
import Dischargereq from "./pages/Dischargereq";
import Dischargelist from "./pages/Dischargelist";
import PharmlListOutpatient from "./pages/PharmlListOutpatient";
import PharmListInpatient from "./pages/PharmListInpatient";
import PharmacyHistory from "./pages/PharmacyHistory";
import PharmacylListReturns from "./pages/PharmacylListReturns";
import DentalOutpatient from "./pages/DentalOutpatient";
import DentalInpatient from "./pages/DentalInpatient";
import RadiologyOutpatient from "./pages/RadiologyOutpatient";
import RadiologyInpatient from "./pages/RadiologyInpatient";
import RadiologyHistory from "./pages/RadiologyHistory";
import LabOutpatient from "./pages/LabOutpatient";
import LabInpatient from "./pages/LabInpatient";
import TreatmentSheet from "./pages/TreatmentSheet";
import Pricelist from "./pages/Pricelist";
import LabHistory from "./pages/LabHistory";
import NutritionInpatient from "./pages/NutritionInpatient";
import NutritionOutpatient from "./pages/NutritionOutpatient";
import PhysioOutpatient from "./pages/PhysioOutpatient";
import PhysioInpatient from "./pages/PhysioInpatient";
import PhysioHistory from "./pages/PhysioHistory";
import PhysioGymList from "./pages/PhysioGymList";
import Mother from "./pages/Mother";
import Child from "./pages/Child";
import MCH from "./pages/MCH";
import WardMgt from "./pages/WardMgt";
import TheatreNurse from "./pages/TheatreNurse";
import PrivateRoute from "./Private/PrivateRoute";
import DocLayout from "./core/DocLayout";
import DocDasboard from "./pages/DocDasboard";
import Register from "./pages/Register";
import Unauthorized from "./pages/Unauthorized";
import { Roles } from './utils/role';

const ROLES = {
    'User': 'non-medic',
    'Nurse': 'nurse',
    'Admin': 'Admin',
    'Doc': 'Doc'
}

function App() {
  return (
    <Routes>
            <Route path="/login" element={<Login />} />
            {/* public routes */}
            <Route path="/register" element={<Register />} />
            <Route path="/forgetPassword" element={<Forgetpassword />} />
            <Route path="/resetPassword" element={<Resetpassword />} />
            <Route path="*" element={<Error />} />
            <Route path="/unauthorized" element={<Unauthorized />} />

            {/* protected routes */}
            <Route path="/" element={<PrivateRoute allowedRoles={[Roles.Doctor, Roles.Nurse, Roles.Admin]} />}>
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<DocDasboard />} />
                    <Route path="/addPatient" element={<PatientReg />} />
                    <Route path="/patient-list" element={<Patientlist />} />
                    <Route path="/add-appointment" element={<AddAppointment />} />
                    <Route path="/appointment-list" element={<Appointmentlist />} />
                    <Route path="/dispatched-list" element={<Dispatchedlist />} />
                    <Route path="/observation-list" element={<Observationlist />} />
                    <Route path="/walk-in" element={<Walkin />} />
                    <Route path="/procedure-queues" element={<Procedurequeues />} />
                    <Route path="/dispatched-observation-list" element={<Dispatchedobservationlist />} />
                    <Route path="/Outpatient-visits" element={<Outpatientvisits />} />
                    <Route path="Inpatient" element={<Inpatient />} />
                    <Route path="/past-doctor-visit" element={<PastDocvisits />} />
                    <Route path="/Patient-Amdn" element={<PatientAdmn />} />
                    <Route path="/MCH-outpatient" element={<MCHoutpatient />} />
                    <Route path="/theatre-day-case" element={<Theatreday />} />
                    <Route path="/anaesthetistia" element={<Anaesthetistia />} />
                    <Route path="/Surgeon" element={<Surgeon />} />
                    <Route path="/Discharge-req" element={<Dischargereq />} />
                    <Route path="/Discharge-list" element={<Dischargelist />} />
                    <Route path="/Dental-outpatient" element={<DentalOutpatient />} />
                    <Route path="/Dental-inpatient" element={<DentalInpatient />} />
                    <Route path="/pharmacy-list-Outpatient" element={<PharmlListOutpatient />} />
                    <Route path="/Pharmacy-list-inpatient" element={<PharmListInpatient />} />
                    <Route path="/Pharmacy-history" element={<PharmacyHistory />} />
                    <Route path="/pharmacy-list-returns" element={<PharmacylListReturns />} />
                    <Route path="/Dental-outpatient" element={<DentalOutpatient />} />
                    <Route path="/Radiology-list-Outpatient" element={<RadiologyOutpatient />} />
                    <Route path="/Radiology-list-inpatient" element={<RadiologyInpatient />} />
                    <Route path="/Radiology-history" element={<RadiologyHistory />} />
                    <Route path="/Lab-history" element={<LabHistory />} />
                    <Route path="/Lab-list-Outpatient" element={<LabOutpatient />} />
                    <Route path="/Lab-list-inpatient" element={<LabInpatient />} />
                    <Route path="/treatment-sheet" element={<TreatmentSheet />} />
                    <Route path="/Price-list" element={<Pricelist />} />
                    <Route path="/Physio-list-Outpatient" element={<PhysioOutpatient />} />
                    <Route path="/Physio-list-inpatient" element={<PhysioInpatient />} />
                    <Route path="/Physio-history" element={<PhysioHistory />} />
                    <Route path="/Physio-Gym-list" element={<PhysioGymList />} />
                    <Route path="/Mother-list" element={<Mother />} />
                    <Route path="/Child-list" element={<Child />} />
                    <Route path="/MCH" element={<MCH />} />
                    <Route path="/Ward-Management" element={<WardMgt />} />
                    <Route path="/theatre-Nurse" element={<TheatreNurse />} />
                    <Route path="/Nutrition-outpatient-list" element={<NutritionOutpatient />} />
                    <Route path="/Nutrition-Inpatient-list" element={<NutritionInpatient />} />
                </Route>
            </Route>
        </Routes>

  );
}

export default App;
