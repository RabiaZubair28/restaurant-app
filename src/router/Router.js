import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import Restaurant from '../pages/Restaurant';


const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/restaurant'/>} />
        <Route path='/restaurant' element={<Restaurant />} />
    </Routes>
  )
}

export default Router