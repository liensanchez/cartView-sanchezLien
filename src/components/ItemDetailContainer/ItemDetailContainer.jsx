import React from 'react';
import detalle from '../ItemDetail/ItemDetail';



function ItemDetailContainer() {


  
  return (
    
   <>

    { detalle.map ((data) => <div key={data.id} >

                                      <button className='btn-primary bg-secondary'>

                                        {`${data.precio}`}

                                      </button>
                                
                              </div> )}
  
  </>

  )

}

export default ItemDetailContainer