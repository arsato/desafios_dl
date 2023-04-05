import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PokeDetail = () => {
  const [data, setData] = useState([]);
  const [photo, setPhoto] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

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
      return (
        <div className="pokeView">
          <div className="alert alert-danger">No existe ese Pokemon</div>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleClick}
          >
            Volver
          </button>
        </div>
      );
    }
    return (
      <div className="pokeView">
        <div className="card text-bg-dark">
          <img src={photo.front_default} className="card-img" />
          <div className="card-text">
            <p className="text-title">
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </p>
            <table className="table">
              <tbody>
                <tr>
                  <th className="stat">HP</th>
                  <td className="stat-value">{data[0].base_stat}</td>
                </tr>
                <tr>
                  <th className="stat">Attack</th>
                  <td className="stat-value">{data[1].base_stat}</td>
                </tr>
                <tr>
                  <th className="stat">Defense</th>
                  <td className="stat-value">{data[2].base_stat}</td>
                </tr>
                <tr>
                  <th className="stat">Special Attack</th>
                  <td className="stat-value">{data[3].base_stat}</td>
                </tr>
                <tr>
                  <th className="stat">Special Defense</th>
                  <td className="stat-value">{data[4].base_stat}</td>
                </tr>
                <tr>
                  <th className="stat">Speeed</th>
                  <td className="stat-value">{data[5].base_stat}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <button type="button" className="btn btn-danger" onClick={handleClick}>
          Volver
        </button>
      </div>
    );
  };

  return <div className="mt-5">{loaded ? dataCard() : <div className="pokeView">
  <div className="alert alert-secondary">Cargando data...</div>
</div>}</div>;
};

export default PokeDetail;
