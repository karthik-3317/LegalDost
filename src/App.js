import logo from "./logo.svg";
import Home from "./templates/HomeLanding";
import Navigation from "./templates/Navigation";
import GoogleMaps from "./templates/GoogleMaps";
import HomeAnimation from "./templates/HomeAnimation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Mediator from "./templates/Mediator";
import ViewHome from "./templates/ViewHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/advocate" element={<Navigation />}>
        <Route index element={<HomeAnimation />} />
      </Route>

        <Route path="/" element={<Home />} />
        <Route path="/viewhome/:id" element={<ViewHome />} />
        <Route path="/map" element={<GoogleMaps />} />
        <Route path="/mediator" element={<Mediator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
