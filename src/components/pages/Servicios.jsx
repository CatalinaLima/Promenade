import "./Servicios.css";
import TabButton from "./TabButton";
import {useState} from 'react';
import {INFO} from '../../data/info.jsx'


const Servicios = () => {

  const [content, setContent] = useState('anteproyecto')


  function handleClickServ (selectedButton) {
    //selectedButton es nuestro identifier para saber cual se eligio
    setContent(selectedButton)

  }


  return (
    <div className="obras">
      <div className='obras2'>
        <h1 className='titleproyectos3'>NUESTROS SERVICIOS</h1>
        <img className="encabezado" src="/assets/4.jpg" alt="Proyecto" />
      </div>
      <div>
        <div className="listado">
          <ul className="ul">
          <TabButton onSelect={() => handleClickServ ('anteproyecto')}>ANTEPROYECTO Y VIABILIDAD</TabButton>
          <TabButton onSelect={() => handleClickServ ('ejecutivo')}>PROYECTO EJECUTIVO</TabButton>
          <TabButton onSelect={() => handleClickServ ('interiores')}>PROYECTO DE INTERIORES</TabButton>
          <TabButton onSelect={() => handleClickServ ('obra')}>DIRECCION DE OBRA</TabButton>
          <TabButton onSelect={() => handleClickServ ('gestion')}>GESTION DE INMUEBLES</TabButton>
          </ul>
        </div>
        <div className= 'tab-content'>
          <p className="sp">{INFO[content].description}</p>
          <img className="simg" src={INFO[content].image} alt="selectedtopic" />
        </div>
      </div>
    </div>
  );
};

export default Servicios;