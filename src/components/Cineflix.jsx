import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components"
import Header from "./Header";
import Movies from "./Movies";
import Schedule from "./Schedule";
import Seats from "./Seats";
import Success from "./Success";
import { useState } from "react";

export default function Cineflix() {

  const [seats, setSeats] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedSeatsName, setSelectedSeatsName] = useState([]);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [infoChoise, setInfoChoise] = useState({});

  return (
    <>
      <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <Header />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/schedule/:movieID" element={<Schedule />} />
          <Route path="/seats/:sectionID" element={<Seats
            setInfoChoise={setInfoChoise}
            seats={seats} setSeats={setSeats}
            selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}
            setSelectedSeatsName={setSelectedSeatsName}
            name={name} setName={setName}
            cpf={cpf} setCpf={setCpf} />} />
          <Route path="/success" element={<Success
            infoChoise={infoChoise}
            selectedSeatsName={selectedSeatsName}
            name={name}
            setName={setName}
            cpf={cpf}
            setCpf={setCpf}
            setSelectedSeats={setSelectedSeats} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}