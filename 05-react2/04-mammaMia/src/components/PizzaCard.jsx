import React from 'react'

const PizzaCard = ({image, name, ingredients, price}) => {

    const betterName = (data) => {
        const words = data.split(" ");
        return words
          .map((word) => {
            return word[0].toUpperCase() + word.substring(1);
          })
          .join(" ");
      };

      const priceFormat = new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
      });

  return (
    <div className="card bg-light">
          <div className="card-body">
            <img className="card-img-top" src={image}></img>
            <h5 className="card-title">{betterName(name)}</h5>
            <div className="overlay">
              <div className="card-text ingredients">
                <h6>Ingredientes: </h6>
                {ingredients.map((ingrediente,i) => (
                  <p key={name+ingrediente}>🍕 {betterName(ingrediente)}</p>
                ))}
              </div>
            </div>
            <h4>{priceFormat.format(price)}</h4>
          </div>
        </div>
  )
}

export default PizzaCard