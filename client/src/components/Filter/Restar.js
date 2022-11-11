import React from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/Actions/index";
import styles from "../Filter/Filter.module.css";


const Restar = ({ setToFirstPage}) => {
    const dispatch = useDispatch();
    function handleFilters(e) {
        e.preventDefault();
        dispatch(getPokemons());
        setToFirstPage();
    }
    return(
        <div className={styles.selects}>
             <button className={styles.Filter} onClick={(e) => handleFilters(e)}>Restar</button>
        </div>
    )
}
export default Restar;