import React from "react";
import { useDispatch, useSelector} from "react-redux";
import {filterType} from "../../redux/Actions/index";
import styles from "../Filter/Filter.module.css";


const FilterType = ({ setToFirstPage}) => {
    const dispatch = useDispatch();
    const types = useSelector ((state) => state.types);

  
    function handleFilterByType(e) {
        e.preventDefault();
        dispatch(filterType(e.target.value));
        setToFirstPage();
    }
    return(
        <div className={styles.selects}>
         <select className={styles.select} onChange={e => handleFilterByType(e)}>
                <option value='none'>Filter by Types:</option>
                   {
                      types && types.map(el => (
                        <option value={el.name} key={el.id}>{el.name}</option>
                        ))
                    }
            </select>
    </div>
    )
}
export default FilterType;