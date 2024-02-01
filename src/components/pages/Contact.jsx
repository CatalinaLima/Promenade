import "./Contact.css";


const Contacto = () => {




  return (
    <div className="obras3">
      {/* <div className='obras2'>
        <h1 className='titleproyectos'>ESTUDIO</h1>
        <img className="encabezado" src="/assets/5_.jpg" alt="Proyecto" />
      </div> */}
      <div>
        <div className= 'tab-content'>
            <div className="part1">
              <h3 className="spc" >Nuevos proyectos</h3>
              <p className="sp1">
              Para obtener más información sobre nuestros servicios,
              recibir asesoramiento de expertos o coordinar una reunión,
              ponte en contacto con nosotros.</p>
            <div>
            <div className="formulario-container">
              <form className="formulario">
                <div className="campo">
                  <label htmlFor="nombre">Nombre</label>
                  <input type="text" id="nombre" name="nombre" required />
                </div>

                <div className="campo">
                  <label htmlFor="email">Correo Electrónico</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="campo">
                  <label htmlFor="telefono">Teléfono</label>
                  <input type="tel" id="telefono" name="telefono" />
                </div>

                <div className="campo">
                  <label htmlFor="asunto">Asunto</label>
                  <input type="text" id="asunto" name="asunto" required />
                </div>

                <div className="campo">
                  <label htmlFor="mensaje">Mensaje</label>
                  <textarea id="mensaje" name="mensaje" required></textarea>
                </div>

                <button type="submit" className="boton-enviar">
                  ENVIAR MENSAJE
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="part2">
          <div className="tx">
          <h3 className="spc" >Promenade Arquitectura</h3>
          <p className="sp1">
          From Punta del Este & Montevideo, Uruguay to the world</p>
          <small className="small2">5454154</small>
          <small className="small2">45414545</small>
          </div>
          <div className="imgg">
          <img className="imgcontact" src="/assets/99.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
      {/* Línea separativa */}
    <div className="linea">
      <div className="linea-separativa"></div>
    </div>
  <div>

</div>
</div>
);
};

export default Contacto;



