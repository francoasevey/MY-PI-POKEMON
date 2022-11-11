import React from "react";
import { useDispatch } from "react-redux";
import {orderByAttack} from "../../redux/Actions/index";
import styles from "../Filter/Filter.module.css";


export default function FilterByAttack ({ setToFirstPage,setOrder}) {
    const dispatch = useDispatch();
    function handleSortedorderByAttack(e){
        dispatch(orderByAttack(e.target.value))
        setToFirstPage()
        setOrder(e.target.value)
        e.preventDefault();
    }
    return(
        <div className={styles.selects}>
              <select className={styles.Filter} onChange={e => handleSortedorderByAttack(e)}>
            <option value='none'>Order By Attack:</option>
            <option value='Low'>Lower</option>
        <option value='High'>Higher</option>
            </select>
        </div>
    )
}