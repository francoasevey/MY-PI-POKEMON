import React from "react";
import NavBar from "../NavBar/NavBar";
import {useState , useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import { getPokemons, getTypes } from "../../redux/Actions/index";
import Paginate from "../Paginate/Paginate";
//import styles from "../Home/Home.module.css";
import Pokemons from "../Pokemons/AllPokemons";

export default function Home(){
    const dispatch = useDispatch()
    const data = useSelector ((state) => state.pokemons);
    const [currentPage, setCurrentPage] = useState(1);
    const [countryPerPage] = useState(10);
    const [next, setNext] = useState(true);
    const [prev, setPrev] = useState(true);
    useEffect(() => {
        dispatch(getPokemons())
    }, [dispatch])
    useEffect(() => {
        dispatch(getTypes())
    },[dispatch])

    const indexOfLastCountries = currentPage * countryPerPage;
  const indexOfFirstCountries = indexOfLastCountries - countryPerPage; //* 10 - 10 = 0 / 20 - 10, etc etc
  let currentCountries;
  if (currentPage === 1) {
    currentCountries = data.slice(
      indexOfFirstCountries, //
      indexOfLastCountries - 1 //
    ); // ? 40, 49 = [...,    ,...] * [1  ...   9]
  } else {
    currentCountries = data.slice(indexOfFirstCountries, indexOfLastCountries); // ? 40, 50 = [...,    ,...] [40  ...   50]
  }
  const paginate = (e, pageNumber) => {
    // e.preventDefault();
    setCurrentPage(pageNumber);
  };

  const setToFirstPage = () => {
    setCurrentPage(1);
  };

  useEffect(() => {
    if (currentPage === 1) setPrev(false);
    else setPrev(true);
    if (currentPage === Math.ceil(data.length/10)) setNext(false);
    else setNext(true);
  }, [currentPage, data.length]);

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
    if (currentPage < data.length / 10) {
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
            <h1>estas en el Home</h1>
            <Paginate
        handlePrev={handlePrev}
        handleNext={handleNext}
        countryPerPage={countryPerPage}
        dataLength={data.length}
        paginate={paginate}
        next={next}
        prev={prev}
        currentPage={currentPage}
      />
        <div>
        {<Pokemons data={currentCountries} />}
        </div>
        </div>
    )
}