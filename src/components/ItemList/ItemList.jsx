import productos from '../Item/Item';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { Link } from 'react-router-dom';



function ItemList() {
  
  return (
    
    <>

    { productos.map ((producto) => <div key={producto.id} className='col-md-4 p-1'>

                                      <div className="card-w-100 mt-5 ">

                                            <div className="card-header d-flex justify-content-center">

                                              <h2>{`${producto.name}`}</h2>

                                            </div>

                                            <div className="card-body d-flex justify-content-center h-50 w-50">

                                              <img src={producto.img} alt="" className='h-50 w-50' />

                                            </div>

                                            <div className='d-flex justify-content-center'>

                                            <Link to={`/detalle/${producto.modelo}`}><button className='btn-primay bg-secondary'> Detalle </button></Link>
                                            
                                            </div>

                                      </div>

                                    </div> )}
                                    
    </>   

  )
}

export default ItemList