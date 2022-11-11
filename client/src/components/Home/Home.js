import React from "react";
import NavBar from "../NavBar/NavBar";
import {useState , useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import { getPokemons, getTypes } from "../../redux/Actions/index";
import Paginate from "../Paginate/Paginate";
import SearchBar from "../SearchBar/SearchBar";
//import styles from "../Home/Home.module.css";
import Pokemons from "../Pokemons/AllPokemons";

export default function Home(){
    const dispatch = useDispatch()
    const pokemon = useSelector ((state) => state.pokemons);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonPerPage] = useState(10);
    const [next, setNext] = useState(true);
    const [prev, setPrev] = useState(true);
    useEffect(() => {
        dispatch(getPokemons())
    }, [dispatch])
    useEffect(() => {
        dispatch(getTypes())
    },[dispatch])

    const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstCountries = indexOfLastPokemon - pokemonPerPage;
  let currentPokemons;
  if (currentPage === 1) {
    currentPokemons = pokemon.slice(
      indexOfFirstCountries,
      indexOfLastPokemon - 1
    );
  } else {
    currentPokemons = pokemon.slice(indexOfFirstCountries, indexOfLastPokemon);
  }
  const paginate = (e, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const setToFirstPage = () => {
    setCurrentPage(1);
  };

  useEffect(() => {
    if (currentPage === 1) setPrev(false);
    else setPrev(true);
    if (currentPage === Math.ceil(pokemon.length/10)) setNext(false);
    else setNext(true);
  }, [currentPage, pokemon.length]);

  const handlePrev = () => {
    if (currentPage !== 1) {
      setPrev(true);
      setCurrentPage(currentPage - 1);
    } else {
      setPrev(false);
      return;
    }
  };
  const handleNext = () => {
    if (currentPage < pokemon.length / 10) {
      setNext(true);
      setCurrentPage(currentPage + 1);
    } else {
      setNext(false);
      return;
    }
  };
  console.log()

    return(
        <div>
            <NavBar/>
            <div> <SearchBar setToFirstPage={setToFirstPage} /></div>
            <Paginate
            handlePrev={handlePrev}
            handleNext={handleNext}
            pokemonPerPage={pokemonPerPage}
            pokemonLength={pokemon.length}
            paginate={paginate}
            next={next}
            prev={prev}
            currentPage={currentPage}
         />
        <div>
        {<Pokemons pokemon={currentPokemons} />}
        </div>
        </div>
    )
}