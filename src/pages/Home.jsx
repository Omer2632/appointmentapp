import AppointmentList from "../components/AppointmentList";
import Services from "../components/Services";
import { appointmentData } from "../helper/data";
import { useState } from "react";
const Home = () => {
  const [appointments, setAppointments] = useState(appointmentData);
  return (
    <main className="text-center mt-2">
      <h1 className="display-5">PORSCHE</h1>
      <h1 className="display-5 text-danger">GÖKALP YETKİLİ SERVİS</h1>
      <Services apps={appointments} setApps={setAppointments} />
      <AppointmentList apps={appointments} setApps={setAppointments} />
    </main>
  );
};

export default Home;
