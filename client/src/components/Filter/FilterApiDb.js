import React from "react";
import { useDispatch} from "react-redux";
import {filterCreated} from "../../redux/Actions/index";
import styles from "../Filter/Filter.module.css";


const FilterApiDb = ({ setToFirstPage}) => {
    const dispatch = useDispatch();

  
    function handleFilterCreated(e) {
        e.preventDefault();
        dispatch(filterCreated(e.target.value));
        setToFirstPage();
    }
    return(
        <div className={styles.selects}>
        <select className={styles.Filter} onChange={(e) => handleFilterCreated(e)}>
                <option value='All'>Filter by API/DB:</option>
                <option value= 'created'>DB</option>
                <option value= 'api'>API</option>
        </select>
    </div>
    )
}
export default FilterApiDb;