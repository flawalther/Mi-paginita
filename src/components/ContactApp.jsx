import React from 'react'

const ContactApp = () => {
  return (
    <div className="container d-flex">

      <form className='mb-5'>
        <h3 className='mb-3'>Dejanos tu contacto:</h3>
        <div className="mb-3">
          <label htmlFor="contactoNombre" className="form-label">Nombre:</label>
          <input type="text" className="form-control" id="contactoNombre" required maxLength={20} minLength={3}/>
        </div>
        <div className="mb-3">
          <label htmlFor="contactoApellido" className="form-label">Apellido:</label>
          <input type="text" className="form-control inputNom" id="contactoApellido" required maxLength={20} minLength={3}/>
        </div>
        <div className="mb-5">
          <label htmlFor="contactoEmail" className="form-label">Email:</label>
          <input type="email" className="form-control" id="contactoEmail" aria-describedby="emailHelp" placeholder='ejemplo@ejemplo.com' required/>
        </div>

        <div className="mb-5">
          <label htmlFor="contactoEmail" className="form-label">La camara seria para uso...</label>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
            <label className="form-check-label" htmlFor="flexCheckChecked">
              personal/familiar
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
              profesional
            </label>
          </div>    
        </div> 

        <button type="submit" className="btn btn-dark">Enviar</button>
      </form>

    </div>
  )
}

export default ContactApp