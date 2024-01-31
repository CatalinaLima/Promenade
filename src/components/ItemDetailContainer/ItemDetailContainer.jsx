import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom';
import productsUpperCase from '../../data/productsStore'; 





function ItemDetailContainer () {

    const { id } = useParams();

    const product = productsUpperCase.find((item) => item.id.toString() === id);

    if (!product) {
        return <div>No se encontró el proyecto</div>;
      }

    return (
        <div className="card-detail_main">
            <div className='image-container'>
                <h3 className='image-title'>{product.title}</h3>
                <img className='imgd' src={product.image2} alt="" />
            </div>
            <div className='section11'>
            <div className='infoproject'>
                <h2 className='infoproject2'>{product.year}</h2>
                <h2 className='infoproject2'>{product.location}</h2>
                <h2 className='infoproject2'>{product.state}</h2>
                <h2 className='infoproject2'>{product.category}</h2>
            </div>
            
            <div className="card-detail_detail">
                <h1 className='idtitle'>{product.title}</h1> 
                <p className='infoproject2' >{product.description}</p>
            </div>
            </div>

            <div className="card-detail_img">
                <div className='imgorder'>
                <img className='orderimg' src='/assets/22.jpg' alt={product.title} />
                <img className='orderimg' src='/assets/33.jpg' alt={product.title} />
                <img className='orderimg2' src='/assets/77.jpg' alt={product.title} />
                <img className='orderimg' src='/assets/44.jpg' alt={product.title} />
                <img className='orderimg2' src='/assets/99.jpg' alt={product.title} />
                <img className='orderimg' src='/assets/55.jpg' alt={product.title} />
                <img className='orderimg2' src='/assets/88.jpg' alt={product.title} />
                <img className='orderimg' src='/assets/66.jpg' alt={product.title} />
                </div>
            </div>
        </div>
    )
    
}

export default ItemDetailContainer