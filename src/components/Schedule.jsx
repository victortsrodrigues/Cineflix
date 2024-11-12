import { Link, useParams } from "react-router-dom"
import { Title } from "./Movies"
import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Schedule() {
  const { movieID } = useParams();
  const [days, setDays] = useState(null);

  useEffect(() => {
    axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieID}/showtimes`)
      .then(resp => setDays(resp.data.days))
      .catch(err => console.log(err.response.data))
  }, []);

  if (days === null) {
    return <div>Carregando...</div>
  }

  return (
    <>
      <Title>Selecione o horário</Title>
      <Sessions>
        {days.map(element => (
          <Session key={element.id}>
            <Day>{element.weekday}, {element.date}</Day>
            <Divisor></Divisor>
            <Times>
              {element.showtimes.map(e => (
                <Link to={`/seats/${e.id}`} key={e.id}>
                  <Time>{e.name}</Time>
                </Link>))}
            </Times>
          </Session>
        ))}
      </Sessions>
    </>
  )
}

const Sessions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
`

const Session = styled.div`
  width: 338px;
  min-height: 149px;
  border-radius: 8px;
  background-color: #2B2D36;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Day = styled.div`
  font-family: "Sarala", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 32.61px;
  color: #FFFFFF;
  margin-top: 15px;
`

export const Divisor = styled.div`
  width: 332px;
  height: 2px;
  border-radius: 1px;
  background-color: #4E5A65;
  margin-top: 20px;
  margin-bottom: 20px;
`

const Times = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 5px;
  padding-right: 5px;
`

const Time = styled.button`
  width: 84px;
  height: 41px;
  border-radius: 4px;
  border: 4px solid #EE897F;
  opacity: 0px;
  background-color: #2B2D36;
  color: #EE897F;
  font-family: "Sarala", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 26.09px;
  text-align: center;
  margin-bottom: 15px;
  margin-left: 7px;
  margin-right: 7px;
`