import React from "react";
import { useDispatch } from "react-redux";
import {orderByABC} from "../../redux/Actions/index";
import styles from "../Filter/Filter.module.css";

export default function FilterABC ({ setToFirstPage,setOrder}) {
    const dispatch = useDispatch();
    function handleSortedPokemonsABC(e){
        dispatch(orderByABC(e.target.value))
        setToFirstPage()
        setOrder(e.target.value)
        e.preventDefault()
    }
    return(
        <div className={styles.selects}>
              <select className={styles.Filter} onChange={e => handleSortedPokemonsABC(e)}>
            <option value='none'>Order by:</option>
                <option value='A-Z'>A-Z</option>
                <option value='Z-A'>Z-A</option>
            </select>
        </div>
    )
}