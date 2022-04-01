import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import productos from '../components/Item/Item';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function RoutesApp() {

  

  return (

    <BrowserRouter>

      <NavBar/>

        <Routes>

          <Route               

                path="/"

                element={

                <ItemListContainer />
        
                 }
          
          />

        </Routes> 
      
    </BrowserRouter>
  )

}

export default RoutesApp