import React from "react";
import { Link } from "react-router-dom";
import styles from "../Paginate/Paginate.module.css";

const Paginate = ({currentPage,handlePrev,handleNext,pokemonLength,paginate,next,prev}) => {
  const pageNumbers = [];
  let Pokelongitud = Math.ceil(pokemonLength / 10);

  for (let i = 1; i <= Pokelongitud; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.PaginacionContainer}>
      <ul className={styles.ListaDePaginacion}>
        {pageNumbers.map((i) => (
          <li key={i}>
            <Link
              className={styles}
              to={"/home"}
              onClick={(e) => paginate(e, i)}
            >
              {i}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.BotonesDeNavegacion}>
        {prev && (
          <button className={styles.ButtomOfPaginado} onClick={() => handlePrev()}>
            Prev
          </button>
        )}
        <h3>{currentPage}</h3>
        {next && (
          <button className={styles.ButtomOfPaginado} onClick={() => handleNext()}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Paginate;
