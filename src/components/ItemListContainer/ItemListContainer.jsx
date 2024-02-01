import ItemListSearch from "./ItemListSearch"
import './ItemListContainer.css'


function ItemListContainer () {





    return (
        <div>
            <ItemListSearch isLoading={isLoading} products={products} />
        </div>
    )
}

export default ItemListContainer