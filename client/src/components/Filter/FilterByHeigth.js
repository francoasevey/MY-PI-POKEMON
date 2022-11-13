import React from "react";
import { useDispatch } from "react-redux";
import {orderByHeight} from "../../redux/Actions/index";
import styles from "../Filter/Filter.module.css";


export default function FilterByHeigth ({ setToFirstPage,setOrder}) {
    const dispatch = useDispatch();
    function handleSortedorderByHeigth(e){
        dispatch(orderByHeight(e.target.value))
        setToFirstPage()
        setOrder(e.target.value)
        e.preventDefault();
    }
    return(
        <div className={styles.selects}>
              <select className={styles.Filter} onChange={e => handleSortedorderByHeigth(e)}>
            <option value='none'>Order By Height:</option>
            <option value='Low'>Lower</option>
        <option value='High'>Higher</option>
            </select>
        </div>
    )
}