import React from "react";
import { useDispatch } from "react-redux";
import {orderByWeight} from "../../redux/Actions/index";
import styles from "../Filter/Filter.module.css";


export default function FilterByWeigth ({ setToFirstPage,setOrder}) {
    const dispatch = useDispatch();
    function handleSortedorderByWeigth(e){
        dispatch(orderByWeight(e.target.value))
        setToFirstPage()
        setOrder(e.target.value)
        e.preventDefault();
    }
    return(
        <div className={styles.selects}>
              <select className={styles.Filter} onChange={e => handleSortedorderByWeigth(e)}>
            <option value='none'>Order By Weight:</option>
            <option value='Low'>Lower</option>
        <option value='High'>Higher</option>
            </select>
        </div>
    )
}