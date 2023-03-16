import { useState, useEffect } from "react";
import ImageCard from "./Card";

const MiApi = ({ search }) => {
  const [data, setData] = useState([]);

  const getInfo = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=09d4258c3693a6347c397fd7a6256dbc&language=es-ES&page=1"
    );
    const val = await response.json();
    setData(val.results);
  };

  useEffect(() => {
    getInfo();
  }, []);

  const tituloAsc = () => {
    let newdata = [...data];
    let result = newdata.sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    );
    setData(result);
  };

  const tituloDesc = () => {
    let newdata = [...data];
    let result = newdata.sort((a, b) =>
      b.name.toLowerCase().localeCompare(a.name.toLowerCase())
    );
    setData(result);
  };

  const fechaAsc = () => {
    let newdata = [...data];
    let result = newdata.sort(
      (a, b) => new Date(a.first_air_date) - new Date(b.first_air_date)
    );
    setData(result);
  };

  const fechaDesc = () => {
    let newdata = [...data];
    let result = newdata.sort(
      (a, b) => new Date(b.first_air_date) - new Date(a.first_air_date)
    );
    setData(result);
  };

  return (
    <div>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-danger dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Ordenar resultados por
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#" onClick={getInfo}>
              Predeterminado
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" onClick={tituloAsc}>
              Título (A a Z)
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" onClick={tituloDesc}>
              Título (Z a A)
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" onClick={fechaAsc}>
              Fecha de estreno ascendente
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" onClick={fechaDesc}>
              Fecha de estreno descendente
            </a>
          </li>
        </ul>
      </div>
      <div className="container-fluid mt-4">
        <div className="d-flex flex-wrap gap-2 text-light justify-content-center">
          {data
            .filter((value) => {
              if (
                value.name.toLowerCase().includes(search.toLowerCase()) ||
                value.overview.toLowerCase().includes(search.toLowerCase()) ||
                value.first_air_date.includes(search)
              ) {
                return true;
              }
              return false;
            })
            .map((value) => (
              <ImageCard
                className="ImageCard"
                name={value.name}
                image={value.poster_path}
                date={value.first_air_date}
                vote={value.vote_average}
                overview={value.overview}
                key={value.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MiApi;
