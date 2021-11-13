import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllMeetups from "./Pages/AllMeetups";
import NewMeetup from "./Pages/NewMeetup";
import Favorites from "./Pages/Favorites";
import Navbar from "./Components/Layout/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<AllMeetups />} />
        <Route path="/all-meetups" element={<AllMeetups />} />
        <Route path="new-meetup" element={<NewMeetup />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
