import React from "react"

const Header = ({title, imagen}) => {
    return (
        <div className="pageTitle bg-dark">
            <img src={imagen} alt="logo hunter x hunter" />
                <h1> {title} </h1>
            <hr />
        </div>
    )
}

export default Header