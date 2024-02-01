import "./Estudio.css";


const Estudio = () => {




  return (
    <div className="obras">
      <div className='obras2'>
        <h1 className='titleproyectos2'>ESTUDIO</h1>
        <img className="encabezado" src="/assets/5_.jpg" alt="Proyecto" />
      </div>
      <div>
        <div className= 'tab-content-estudio'>
            <div className="part1">
                <h3 className="spt" >PROMENADE</h3>
                <p className="sp1">
                PROMENADE arquitectos es una firma de arquitectura e interiorismo con sede en Uruguay, especializada en proyectos residenciales, comerciales y gastronómicos de alto nivel. Buscamos una simbiosis perfecta entre el cliente, su público objetivo y el resultado final. Nuestra búsqueda es proyectar ambientes que evocan emociones mediante una arquitectura actual, divertida, sincera, que mantiene el equilibrio entre la funcionalidad, el diseño y la innovación. Nos especializamos en el diseño a medida, valorando el producto finamente acabado.</p>
            </div>
            <div className="part1">
            <p className="sp2">Fundado en 2020, Promenade Arquitectos es un estudio con sede en Uruguay que trabaja con el diseño para enriquecer la experiencia humana. Como arquitectos y diseñadores multidisciplinarios, consideramos nuestro trabajo como un camino al bienestar, mejorando y optimizando cada espacio.Cada proyecto, ya sea arquitectura o interiorismo ejemplifica el minimalismo infundido con un objetivo más amplio de volver a sensibilizar el entorno construido a través del diseño. Nuestro objetivo es encontrar la esencia del diseño sin importar su escala o ubicación para crear arquitectura que se conecte con el deseo humano de pertenencia, autonomía e identidad.</p>
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

export default Estudio;