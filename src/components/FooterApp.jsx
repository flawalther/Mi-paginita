import React from 'react'

const FooterApp = () => {
  return (
   
    <div className="container bg-dark text-white p-5 container-fluid">
      <div className="row">
 
        <div className="col-md-6 text-center mb-3">
          <h5>Siguenos en nuestras redes sociales</h5>
        </div>
        <div className="col-md-6 d-flex justify-content-evenly mb-5">
          <i className="fa fa-instagram fa-2x text-white"></i>
          <i className="fa fa-facebook fa-2x text-white"></i>
          <i className="fa fa-twitter fa-2x text-white"></i>
        </div>

        <div className="col-12 mb-5">
          <div className="text-center">
            {/* <a href="https://api.whatsapp.com/send?phone=0123456789" target="_blank"> */}
              <i className="fa fa-whatsapp fa-4x mb-2" aria-hidden="true"></i>
              <h5 className='fw-bolder'>Escríbenos por WhatsApp</h5>
              <p>Para comunicarte con un representante</p>
            {/* </a> */}
          </div>
        </div>

      </div>
      <div className="row">
        <div className="col text-center fs-6 fw-light">
          <p>&copy; Todos los derechos reservados.</p>
        </div>
      </div>

    </div>

  )
}

export default FooterApp