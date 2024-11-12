import styled from "styled-components"
import { Link } from "react-router-dom";

export default function Success({ infoChoise, selectedSeatsName, name, setName, cpf, setCpf, setSelectedSeats }) {

  function Teste(){
    console.log("Teste")
    setName("");
    setCpf("");
    setSelectedSeats([]);
  }

  return (
    <>
      <Center>
        <TitleSuccess>Pedido finalizado!</TitleSuccess>
        <Conteiner>
          <TitleSection>Filme e sessão</TitleSection>
          <Divisor></Divisor>
          <Info>{infoChoise.movie.title}</Info>
          <Info>{infoChoise.day.date} às {infoChoise.name}</Info>
          <br></br>
          <TitleSection>Ingressos</TitleSection>
          <Divisor></Divisor>
          {selectedSeatsName.map((elemento, index) => <Info key={index}>Assento {elemento}</Info>)}
          <br></br>
          <TitleSection>Comprador(a)</TitleSection>
          <Divisor></Divisor>
          <Info>Nome: {name}</Info>
          <Info>CPF: {cpf}</Info>
        </Conteiner>
        <Link to={"/"}>
          <InitialButton onClick={Teste}>Voltar para tela inicial</InitialButton>
        </Link>
      </Center>
    </>
  )
}

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
`
const Conteiner = styled.div`
  box-sizing: border-box;
  background-color: #2B2D36;
  width: 100%;
  border-radius: 8px;
  padding: 15px;
`

const TitleSuccess = styled.p`
  font-family: "Sarala", sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 39.13px;
  text-align: center;
  color: #9DB899;
  margin-top: 85px;
  margin-bottom: 20px;
`
const TitleSection = styled.p`
  font-family: "Sarala", sans-serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 35.87px;
  color: #EE897F;
`
const Divisor = styled.div`
  width: 100%;
  height: 2px;
  border-radius: 1px;
  background-color: #4E5A65;
  margin-top: 10px;
  margin-bottom: 10px;
`

const Info = styled.p`
  font-family: "Sarala", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 32.61px;
  color: #FFFFFF;
`

const InitialButton = styled.button`
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