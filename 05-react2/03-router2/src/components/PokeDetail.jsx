import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PokeDetail = () => {
  const [data, setData] = useState([]);
  const [photo, setPhoto] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate()

  const { name } = useParams();

  const getPersonaje = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (!response.ok) {
        setError(true);
      }
      let personaje = await response.json();
      setData(personaje.stats);
      setPhoto(personaje.sprites);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoaded(true);
    }
  };

  useEffect(() => {
    getPersonaje();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/pokemons");
  };

  let dataCard = () => {
    if (error) {
      return <div className="alert alert-danger">No existe ese Pokemon</div>;
    }
    return (
      <div className="pokeView">
        <div className="card text-bg-dark">
          <p className="text-title">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </p>
          <img src={photo.front_default} className="card-img" />
          <p className="text-description">HP: {data[0].base_stat}</p>
          <p className="text-description">Attack: {data[1].base_stat}</p>
          <p className="text-description">Defense: {data[2].base_stat}</p>
          <p className="text-description">
            Special Attack: {data[3].base_stat}
          </p>
          <p className="text-description">
            Special Defense: {data[4].base_stat}
          </p>
          <p className="text-description">Speed: {data[5].base_stat}</p>
        </div>
        <button type="button" className="btn btn-danger" onClick={handleClick}>Volver</button>
      </div>
    );
  };

  return <div className="mt-5">{loaded ? dataCard() : "Cargando..."}</div>;
};

export default PokeDetail;
