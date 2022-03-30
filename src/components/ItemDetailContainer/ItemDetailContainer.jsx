import detalle from '../ItemDetail/ItemDetail';
import React from 'react'

function ItemDetailContainer() {
  return (
    <>
    { detalle.map ((data) => <div key={data.id} >

        <button className='btn-primary'>

          {`${data.precio}`}

        </button>
  
    </div> )}
    
    </>
  )
}

export default ItemDetailContainer