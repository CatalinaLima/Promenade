import './Item.css'
import {Link} from 'react-router-dom'


function Item ({title, image, id, category}) {


    return(
    //id dinamico
    <Link to = {`/product/${id}`} > 
        <div className="item-card">
            <div className="item-card_img">
                <img src={image} alt="imagen"></img>
            </div>
            <div className="item-card_header">
                <h2 className="item_title">{title}</h2>

                {/* <small>{category}</small> */}
            </div>
            <p>{category}</p>
        </div>
    </Link>
)}

export default Item 