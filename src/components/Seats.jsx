import { useNavigate, useParams } from "react-router-dom"
import { Title } from "./Movies"
import { Divisor } from "./Schedule";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Seats({ setInfoChoise, seats, setSeats, selectedSeats, setSelectedSeats, setSelectedSeatsName, name, setName, cpf, setCpf }) {
  const { sectionID } = useParams();
  const navigate = useNavigate();

  function handleSeatClick(seatId, available, seatName) {
    if (available) {
      setSelectedSeats((prevSelectedSeats) =>
        prevSelectedSeats.includes(seatId)
          ? prevSelectedSeats.filter((element) => element !== seatId)
          : [...prevSelectedSeats, seatId]
      );
      setSelectedSeatsName((prevSelectedSeatsName) =>
        prevSelectedSeatsName.includes(seatName)
          ? prevSelectedSeatsName.filter((element) => element !== seatName)
          : [...prevSelectedSeatsName, seatName]
      );
    } else {
      alert("Esse assento não está disponível");
    }
  };

  function submitForm(event) {
    event.preventDefault()
    const body = {
      ids: selectedSeats,
      name: name,
      cpf: cpf
    };
    axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", body)
      .then(res => navigate("/success"))
      .catch(err => console.log(err.response.data))
  }

  useEffect(() => {
    axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sectionID}/seats`)
      .then(resp => {
        setSeats(resp.data.seats)
        setInfoChoise(resp.data)
      })
      .catch(err => console.log(err.response.data))
  }, []);

  if (seats === null) {
    return <div>Carregando...</div>
  }

  return (
    <>
      <Title>Selecione o(s) assento(s)</Title>
      <Center>
        <AllSeats>
          {seats.map(element => {
            return (
              <Seat
                key={element.id}
                $available={element.isAvailable}
                $isSelected={selectedSeats.includes(element.id)}
                onClick={() => handleSeatClick(element.id, element.isAvailable, element.name)}>{element.name}
              </Seat>
            )
          })}
        </AllSeats>
        <Divisor></Divisor>
        <SubmitForm onSubmit={submitForm}>
          <InputGroup>
            <label htmlFor="name">Nome do comprador(a)</label>
            <input
              id="name"
              type="text"
              placeholder="  Digite seu nome..."
              value={name}
              onChange={e => setName(e.target.value)}>
            </input>
          </InputGroup>
          <InputGroup>
            <label htmlFor="cpf">CPF do comprador(a)</label>
            <input
              id="cpf"
              type="text"
              placeholder="  Digite seu cpf..."
              value={cpf}
              onChange={e => setCpf(e.target.value.replace(/\D/g, ''))}>
            </input>
          </InputGroup>
          <ReserveButton type="submit">Reservar assento(s)</ReserveButton>
        </SubmitForm>
      </Center>
    </>
  )
}

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AllSeats = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
`

const Seat = styled.div`
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  gap: 0px;
  border-radius: 12px;
  border: ${(props) => props.$isSelected ? '3px solid #EE897F' : ""};
  background-color: ${({ $isSelected, $available }) =>
    $isSelected ? '#FADBC5' : $available ? '#9DB899' : '#2B2D36'};
  margin-left: 3.5px;
  margin-right: 3.5px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", serif;
  font-size: 11px;
  font-weight: 400;
  line-height: 12.89px;
  color: #2B2D36;
`

const SubmitForm = styled.form`
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 11px;
  label {
    color: #FFFFFF;
    font-family: "Sarala", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 26.09px;
  }
  input {
    width: 338px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #D4D4D4;
    &::placeholder {
      font-family: "Roboto", serif;
      font-size: 16px;
      font-weight: 400;
      font-style: italic;
      line-height: 18.75px;
      color: #AFAFAF;
    }
  }
`

const ReserveButton = styled.button`
  width: 338px;
  height: 42px;
  border-radius: 8px;
  background-color: #EE897F;
  font-family: "Sarala", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 29.35px;
  text-align: center;
  color: #2B2D36;
  margin-top: 15px;
`