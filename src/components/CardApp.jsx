import React from 'react'

const CardApp = ({item}) => {
  return (

    <div className="col-12 col-md mb-4">  

        <div className="card align-items-center h-100 pt-3">
          <i className={`fa ${item.icono} fa-5x`} aria-hidden="true"></i>
          <div className="card-body text-center">
            <p className="card-text fa-2x">{item.titulo}</p>
            <p className="card-text">{item.subtitulo}</p>
          </div>
        </div>
 
    </div>
   
  )
}

export default CardApp