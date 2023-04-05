import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Pokemons = () => {
  const url = "https://pokeapi.co/api/v2/pokemon/?limit=811";

  const [data, setData] = useState([]);
  const [pokeName, setPokeName] = useState("")

  const navigate = useNavigate();

  const irAPokemon = (e) => {
    e.preventDefault();
        navigate(`/pokemons/${pokeName}`);
  };

  const getData = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        setError(true);
      }
      let pokedata = await res.json();
      setData(pokedata.results);
    } catch (error) {
      console.log(error.message);
    } 
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="pokeView">
      <h1>Pokemon Data</h1>
      <form className="pokeForm" onSubmit={irAPokemon}>
        <select className="form-select" onChange={({ target }) => setPokeName(target.value)}>
            <option value="0">Selecciona un Pokemon</option>
          {data.map((pokemon, i) => (
            <option key={i+1} value={pokemon.name}>
              {(i+1).toString().padStart(3,"0") + " - " + pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </option>
          ))}
        </select>
        <button type="submit" className="btn btn-danger">Ver Detalle</button>
      </form>
    </div>
  );
};

export default Pokemons;
