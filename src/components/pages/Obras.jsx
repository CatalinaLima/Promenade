import './Obras.css';
import productsUpperCase from '../../data/productsStore';  
import Item from '../Item/Item';

const Obras = () => {
  return (
    <div className="obras">
      <div className='obras2'>
        <h1 className='titleproyectos'>PROYECTOS</h1>
        <img className="encabezado" src="/assets/2.jpg" alt="Proyecto" />
      </div>
      <div className='projects'>
        {productsUpperCase.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Obras;

