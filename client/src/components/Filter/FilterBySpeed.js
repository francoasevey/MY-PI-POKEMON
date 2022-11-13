import React from "react";
import { useDispatch } from "react-redux";
import {orderBySpeed} from "../../redux/Actions/index";
import styles from "../Filter/Filter.module.css";


export default function FilterBySpeed ({ setToFirstPage,setOrder}) {
    const dispatch = useDispatch();
    function handleSortedorderBySpeed(e){
        dispatch(orderBySpeed(e.target.value))
        setToFirstPage()
        setOrder(e.target.value)
        e.preventDefault();
    }
    return(
        <div className={styles.selects}>
              <select className={styles.Filter} onChange={e => handleSortedorderBySpeed(e)}>
            <option value='none'>Order By Speed:</option>
            <option value='Low'>Lower</option>
        <option value='High'>Higher</option>
            </select>
        </div>
    )
}