import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import {filterAbility,getAbility} from "../../redux/Actions/index";
import styles from "../Filter/Filter.module.css";


const FilterAbility = ({ setToFirstPage}) => {
    const dispatch = useDispatch();
    const Ability = useSelector ((state) => state.abilities);

    
    useEffect(() => {
        dispatch(getAbility());
    },[dispatch])

    function handleFilterByAbiity(e) {
        e.preventDefault();
        dispatch(filterAbility(e.target.value));
        setToFirstPage();
    }
    return(
        <div className={styles.selects}>
         <select className={styles.select} onChange={e => handleFilterByAbiity(e)}>
                <option value='none'>Filter by Ability:</option>
                   {
                      Ability && Ability.map(el => (
                        <option value={el.name} key={el.id}>{el.name}</option>
                        ))
                    }
            </select>
    </div>
    )
}
export default FilterAbility;