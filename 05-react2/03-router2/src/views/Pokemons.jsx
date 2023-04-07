import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Pokemons = () => {
  const url = "https://pokeapi.co/api/v2/pokemon/?limit=811";

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [pokeName, setPokeName] = useState("");

  const navigate = useNavigate();

  const irAPokemon = (e) => {
    e.preventDefault();
    navigate(`/pokemons/${pokeName}`);
  };

  const getData = async () => {
    try {
      const res = await fetch(url);
      let pokedata = await res.json();
      setData(pokedata.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const betterName = (data, index) => {
    return (
      (index + 1).toString().padStart(3, "0") +
      " - " +
      data.name.charAt(0).toUpperCase() +
      data.name.slice(1)
    );
  };

  return (
    <div className="pokeView">
      <h1>Pokemon Data</h1>
      <div className="pokeForm">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            id="pokeButton"
          >
          </button>
          <ul className="dropdown-menu">
            <input
              key="0"
              className="buscador dropdown-item"
              name="busqueda"
              type="text"
              placeholder={"Filtra por nombre del pokemon"}
              onChange={(e) => setSearch(e.target.value)}
            />
            {data
              .filter((value) => {
                if (value.name.toLowerCase().includes(search.toLowerCase())) {
                  return true;
                }
                return false;
              })
              .map((pokemon, i) => (
                <li key={i + 1}>
                  <button
                    id={i + 1}
                    value={pokemon.name}
                    className="dropdown-item"
                    href="#"
                    onClick={({ target }) => (
                      setPokeName(target.value),
                      (document.getElementById("pokeButton").innerText =
                        target.innerText)
                    )}
                  >
                    {betterName(pokemon, i)}
                  </button>
                </li>
              ))}
          </ul>
        </div>
        <button type="submit" className="btn btn-danger" onClick={irAPokemon}>
          Ver Detalle
        </button>
      </div>
    </div>
  );
};

export default Pokemons;
