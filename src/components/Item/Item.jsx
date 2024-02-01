import './Item.css'
import {Link} from 'react-router-dom'
import {useState} from 'react'


function Item ({title, image, id, category}) {
    const [isColored, setIsColored] = useState(false);

    const handleMouseOver = () => {
        setIsColored(true);
      };
    
      const handleMouseOut = () => {
        setIsColored(false);
      };


      return (
        <Link to={`/product/${id}`}>
          <div
            className={`item-card ${isColored ? 'colored' : ''}`}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <div className="item-card_img">
              <img src={image} alt="imagen"></img>
            </div>
            <div className="item-card_header">
              <h2 className="item_title">{title}</h2>
            </div>
            <p>{category}</p>
          </div>
        </Link>
      );
    }

export default Item 