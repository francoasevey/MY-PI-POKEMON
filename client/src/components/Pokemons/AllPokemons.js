import React, { useEffect, useState } from "react";
import Card from '../Card/Card'
import Loader from '../Loader/Loader'
import Sections from "../Pokemons/AllPokemons.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Pokemons = ({ pokemon }) => {
  const [loader, setLoader] = useState(false);
  const AllPokemons = useSelector((state) => state.pokemons);

  useEffect(() => {
    if (pokemon.length < 1) {
      setLoader(true);
      setTimeout(() => {
        setLoader(false);
      }, 5000);
    } else setLoader(false);
  }, [pokemon.length]);

  if (pokemon.length === 0 && AllPokemons.length !== 0) {
    pokemon = AllPokemons;
  }

  const stylee = { color: "#fff", marginTop: "17rem" };

  return (
    <section id={"Section"} className={Sections.SectionCoutriesLoad}>
      {loader && <Loader />}
      {pokemon.length === 0 && !loader && (
        <h1 style={stylee}>POKEMON NOT FOUND!</h1>
      )}
    <div className={Sections.cards}>

      {pokemon.length &&
        pokemon.map((el) => {
          return(
            <div className="Pokemons" key={el.id}>
                <Link to={"/Detail/" + el.id} key={el.id}>
                <Card
                id={el.id} 
                name={el.name}
                image={el.image? el.image: el.image}
                types={el.types.map((e) => (e.name ? e.name : e))}
                key={el.id}
                />
                </Link>
            </div>
        )
})}
      </div>
    </section>
  );
};
/*
                <Card
                id={el.id} 
                name={el.name}
                image={el.image? el.image: el.image}
                types={el.types}
                created={el.created}
                key={el.id}
                />
*/
export default Pokemons;