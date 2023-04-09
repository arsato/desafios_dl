import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Pokemons = () => {
  const url = "https://pokeapi.co/api/v2/pokemon/?limit=811";

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [search, setSearch] = useState("");
  const [pokeName, setPokeName] = useState("");
  const [pokeSprite, setPokeSprite] = useState("");
  const [loaded, setLoaded] = useState(false);

  const navigate = useNavigate();

  const irAPokemon = (e) => {
    e.preventDefault();
    navigate(`/pokemons/${pokeName}`);
  };

  const getData = async () => {
    try {
      const res = await fetch(url);
      let pokelist = await res.json();
      pokelist = pokelist.results;
      pokelist = pokelist.map((val, i) => ({
        id: i + 1,
        name: val.name,
        url: val.url,
      }));

      const promises = pokelist.map(async (poke) => {
        const res = await fetch(poke.url);
        const data = await res.json();
        return data;
      });

      const pokedetails = await Promise.all(promises);
      setData(pokelist);
      setData2(pokedetails);
      console.log(data2);
    } catch (error) {
      console.log(error);
    } finally {
      setLoaded(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const betterName = (data) => {
    return (
      data.id.toString().padStart(3, "0") +
      " - " +
      data.name.charAt(0).toUpperCase() +
      data.name.slice(1)
    );
  };

  const getSprite = (poke) => {
    const searchObject = data2.find((pokemon) => pokemon.name === poke);
    let sprite = searchObject.sprites.front_default;
    setPokeSprite(sprite);
  };

  const previewCard = () => {
    return (
      <div className="text-bg-dark preview">
        <img src={pokeSprite} className="preview-img" />
        <div className="card-text">
          <p className="text-title">
            {pokeName.charAt(0).toUpperCase() + pokeName.slice(1)}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="pokeView">
      <h1>Pokemon Data</h1>
      {loaded ? (
        <div className="pokeForm">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="pokeButton"
            ></button>
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
                      id={pokemon.id}
                      value={pokemon.name}
                      className="dropdown-item"
                      href="#"
                      onClick={({ target }) => (
                        setPokeName(target.value),
                        (document.getElementById("pokeButton").innerText =
                          target.innerText),
                        getSprite(pokemon.name)
                      )}
                    >
                      {betterName(pokemon)}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
          {pokeName ? <div className="poke-preview">{previewCard()}</div> : ""}
          <button type="submit" className="btn btn-danger" onClick={irAPokemon}>
            Ver Detalle
          </button>
        </div>
      ) : (
        <div className="alert alert-secondary">
          <p>Cargando data!!!</p>
          <p>Porfavor espere...</p>
        </div>
      )}
    </div>
  );
};

export default Pokemons;
