import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Pokemons = () => {
  const url = "https://pokeapi.co/api/v2/pokemon/?limit=811";

  const [data, setData] = useState([]);
  const [pokeName, setPokeName] = useState("")
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

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
      let lista = await res.json();
      setData(lista.results);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoaded(true);
      console.log(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="pokeView">
      <h1>Pokemons</h1>
      <form onSubmit={irAPokemon}>
        <label>Selecciona un Pokemon</label>
        <select className="form-select" onChange={({ target }) => setPokeName(target.value)}>
            <option value="0">Pokemon</option>
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
