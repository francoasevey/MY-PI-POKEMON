import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemon } from "../../redux/Actions/index";
import S from "../SearchBar/SearchBar.module.css";

const SearchBar = ({ setToFirstPage }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [error, setError] = useState(true);

  const handleError = (text) => {
    let validate = new RegExp("^[áéíóúÁÉIÓÚña-zA-Z ]+$");
    if (!validate.test(text)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handlerChange = (e) => {
    handleError(e.target.value);
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error) dispatch(getNamePokemon(search));
    setSearch("");
    setToFirstPage();
  };

  function handleClick(e) {
    const max = 15
      e.preventDefault();
      if (search.length === 0) {
        return alert("Please input a name to start the search ❌");
      } if (search.length > max){
          e.preventDefault()
          return alert("the name cannot exceed 15 characters ❌")
      }
       else {
        dispatch(getNamePokemon(search));
        setSearch(e.target.value);  
        setSearch("");
        setToFirstPage()
        console.log(e)
      }
    }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={`${S.SearchBarStyles}`}>
      <div>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Pokemon..."
          className={`${S.InputSearch} ${
            error && search.length > 0 ? S.errors : S.sucess
          }`}
          value={search}
          onChange={(e) => handlerChange(e)}
          autoComplete="off"
        />
        <div>
          {error && search.length > 0 && <p>only letters are allowed 🆗👁‍🗨💬</p>}
        </div>
      </div>
      <br />
      <div>
        <button type="submit" disabled={error} className={S.ButtonSearch} onClick={handleClick}>
          search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
