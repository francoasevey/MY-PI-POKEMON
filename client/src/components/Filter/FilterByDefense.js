import React from "react";
import { useDispatch } from "react-redux";
import {orderByDefense} from "../../redux/Actions/index";
import styles from "../Filter/Filter.module.css";


export default function FilterByDefense ({ setToFirstPage,setOrder}) {
    const dispatch = useDispatch();
    function handleSortedorderByDefense(e){
        dispatch(orderByDefense(e.target.value))
        setToFirstPage()
        setOrder(e.target.value)
        e.preventDefault();
    }
    return(
        <div className={styles.selects}>
              <select className={styles.Filter} onChange={e => handleSortedorderByDefense(e)}>
            <option value='none'>Order By Defense:</option>
            <option value='Low'>Lower</option>
        <option value='High'>Higher</option>
            </select>
        </div>
    )
}