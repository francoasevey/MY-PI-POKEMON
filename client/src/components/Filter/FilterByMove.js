import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import {filterMove,getMove} from "../../redux/Actions/index";
import styles from "../Filter/Filter.module.css";


const FilterMove = ({ setToFirstPage}) => {
    const dispatch = useDispatch();
    const move = useSelector ((state) => state.moves);

    useEffect(() => {
        dispatch(getMove());
    },[dispatch]);

    function handleFilterByMove(e) {
        e.preventDefault();
        dispatch(filterMove(e.target.value));
        setToFirstPage();
    }
    return(
        <div className={styles.selects}>
         <select className={styles.select} onChange={e => handleFilterByMove(e)}>
                <option value='none'>Filter by Move:</option>
                   {
                      move && move.map(el => (
                        <option value={el.name} key={el.id}>{el.name}</option>
                        ))
                    }
            </select>
    </div>
    )
}
export default FilterMove;