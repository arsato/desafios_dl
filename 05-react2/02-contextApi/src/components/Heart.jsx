import React from 'react'

const Heart = ({liked}) => {
  return (
    <i className={"fa fa-heart"} style={{color: liked ? "red" : "white"}}></i>
  )
}

export default Heart