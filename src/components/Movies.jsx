import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Movies() {

  const [movies, setMovies] = useState(null);

  useEffect(() => {
    axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
      .then(resp => setMovies(resp.data))
      .catch(err => console.log(err.response.data))
  }, []);

  if (movies === null) {
    return <div>Carregando...</div>
  }

  return (
    <>
      <Title>Em cartaz</Title>
      <Banners>
        {movies.map(element => (
          <Link to={`/schedule/${element.id}`} key={element.id}>
            <Banner src={element.posterURL} />
          </Link>
        ))}
      </Banners>
    </>
  )
}

export const Title = styled.p`
  font-family: "Sarala", sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 39.13px;
  text-align: center;
  text-decoration-skip-ink: none;
  color: #FFFFFF;
  margin-top: 85px;
  margin-bottom: 20px;
`

const Banners = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
`

const Banner = styled.img`
  width: 145px;
  height: 210px;
  border-radius: 8px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 15px;
`