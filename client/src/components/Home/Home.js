import React from "react";
import NavBar from "../NavBar/NavBar";
import {useState , useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import { getPokemons, getTypes, getAbility } from "../../redux/Actions/index";
import Paginate from "../Paginate/Paginate";
import SearchBar from "../SearchBar/SearchBar";
//import styles from "../Home/Home.module.css";
import Pokemons from "../Pokemons/AllPokemons";
import FilterApiDb from "../Filter/FilterApiDb";
import FilterType from "../Filter/FilterType";
import FilterAbility from "../Filter/FilterByAbility";
import FilterABC from "../Filter/FilterABC";
import FilterByAttack from "../Filter/FilterByAttack";
import FilterByDefense from "../Filter/FilterByDefense";
import FilterBySpeed from "../Filter/FilterBySpeed";
import FilterByHeigth from "../Filter/FilterByHeigth";
import FilterByWeigth from "../Filter/FilterByWeigth";
import Restar from "../Filter/Restar";

export default function Home(){
    const dispatch = useDispatch()
    const pokemon = useSelector ((state) => state.pokemons);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonPerPage] = useState(12);
    const [next, setNext] = useState(true);
    const [prev, setPrev] = useState(true);
    useEffect(() => {
        dispatch(getPokemons())
    }, [dispatch])
    useEffect(() => {
        dispatch(getTypes())
        dispatch(getAbility())
    },[dispatch])
    const [,setOrder] = useState("");


    const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemons = indexOfLastPokemon - pokemonPerPage;
  let currentPokemons;
  currentPokemons = pokemon.slice(indexOfFirstPokemons, indexOfLastPokemon);

  /*if (currentPage === 1) {
    currentPokemons = pokemon.slice(
      indexOfFirstCountries,
      indexOfLastPokemon - 1
    );
  } else {
    currentPokemons = pokemon.slice(indexOfFirstCountries, indexOfLastPokemon);
  }*///funcion para poder poner un numero determinado en la primera pagina
  const paginate = (e, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const setToFirstPage = () => {
    setCurrentPage(1);
  };

  useEffect(() => {
    if (currentPage === 1) setPrev(false);
    else setPrev(true);
    if (currentPage === Math.ceil(pokemon.length/12)) setNext(false);
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
    if (currentPage < pokemon.length / 12) {
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
            <div>
            <SearchBar setToFirstPage={setToFirstPage}/>
            <FilterApiDb setToFirstPage={setToFirstPage}/>
            <FilterType setToFirstPage={setToFirstPage}/>
            <FilterAbility setToFirstPage={setToFirstPage}/>

            <FilterABC setToFirstPage={setToFirstPage} setOrder={setOrder}/>
            <FilterByAttack setToFirstPage={setToFirstPage} setOrder={setOrder}/>
            <FilterByDefense setToFirstPage={setToFirstPage} setOrder={setOrder}/>
            <FilterBySpeed setToFirstPage={setToFirstPage} setOrder={setOrder}/>
            <FilterByHeigth setToFirstPage={setToFirstPage} setOrder={setOrder}/>
            <FilterByWeigth setToFirstPage={setToFirstPage} setOrder={setOrder}/>
            <Restar setToFirstPage={setToFirstPage}/>
            </div>
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