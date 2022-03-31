import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Titulo from '../components/Titulo/Titulo';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemList from '../components/ItemList/ItemList';
import productos from '../components/Item/Item';


function RoutesApp() {

  

  return (

    <>
     
      <NavBar/>

      <ItemListContainer greeting='List item' />


      <div className='d-flex justify-content-center'>
        <ItemList/>
      </div>
      

      
    </>
  )

}

export default RoutesApp