import {useParams} from 'react-router-dom'
import productos from '../Item/Item';


import React from 'react'

function ItemDetail({producto}) {

  const {modelo} = useParams();
  
  return (
    
   <>

    { productos
    .filter ((producto) => producto.modelo === modelo)
    .map ((producto) => <div key={producto.id} >
                                      
                                      <h2>{`${producto.name}`} </h2>

                                      <button className='btn-primary bg-secondary'>

                                        {`${producto.precio}`}

                                      </button>
                                
                              </div> )}
  
  </>

  )

}

export default ItemDetail