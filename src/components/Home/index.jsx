import React, { useState, useEffect, useRef } from "react";
import getEpisode from "../../services/getEpisode";
import Header from "../Header";
import CardsHolder from "../Cardsholder";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [episodeNum, setEpisodeNum] = useState("");
  const refInput = useRef(null);

  useEffect(() => {
    getEpisode(episodeNum).then((ans) => setCharacters(ans));
  }, [episodeNum, characters]);

  const clickHandler = (e) => {
    let a = Number(refInput.current.value);
    setEpisodeNum(a);
  };

  return (
    <div>
      <Header clickHandler={clickHandler} ref={refInput} />
      <CardsHolder data={characters} />
    </div>
  );
};

export default Home;
