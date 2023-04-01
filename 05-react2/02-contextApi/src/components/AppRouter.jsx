import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Favourites from '../views/Favourites'
import Home from '../views/Home'
import NotFound from '../views/NotFound'

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default AppRouter;