import React, { useEffect, useState } from "react";
import Card from '../Card/Card'
import Loader from '../Loader/Loader'
import Sections from "../Pokemons/AllPokemons.module.css";
import { useSelector } from "react-redux";

const Pokemons = ({ data }) => {
  const [loader, setLoader] = useState(false);
  const AllPokemons = useSelector((state) => state.pokemons);

  useEffect(() => {
    if (data.length < 1) {
      setLoader(true);
      setTimeout(() => {
        setLoader(false);
      }, 5000);
    } else setLoader(false);
  }, [data.length]);

  if (data.length === 0 && AllPokemons.length !== 0) {
    data = AllPokemons;
  }

  const stylee = { color: "#fff", marginTop: "17rem" };

  return (
    <section id={"Section"} className={Sections.SectionCoutriesLoad}>
      {loader && <Loader />}
      {data.length === 0 && !loader && (
        <h1 style={stylee}>No se Encontró el Pais</h1>
      )}
    <div className={Sections.cards}>

      {data.length &&
        data.map((el) => (
          <Card
          id={el.id} 
          name={el.name}
          image={el.image? el.image: el.image}
          types={el.types}
          created={el.created}
          key={el.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Pokemons;

// jinna loves the music but , her friend don't like the music

// jina and her boyfriend , decide to go on a trip to Canada but his boyfriend prefer to go to Mexico
