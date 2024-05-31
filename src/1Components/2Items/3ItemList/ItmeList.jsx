import Item from "../1Item/Item";
import "./ItemList.css"

export default function ItemList({products}){ 
    return(
        <div className="item--list__container">
            {products.map((product)=>(
                <Item key={product.id} item={product} />
            ))}
        </div>
    );
    };

