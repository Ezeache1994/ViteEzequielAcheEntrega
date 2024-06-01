import "./ItemCount.css"
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ItemCount({credits,count,increment,decrement}){
    return(
        <div className="Container_of-CountItem" >
            <div style={{margin:"0 0 2rem 0"}} className="CountItem__Count"  >
            <Button style={{margin:"0 1rem 0 1rem"}} variant="danger" size="md" className="CountItem__Button" onClick={decrement}>
                -
            </Button>
            <h1 className="CountItem__The--Counter" >
                {count}
            </h1>
                <Button style={{margin:"0 1rem 0 1rem"}} variant="success" size="md" className="CountItem__Button" disabled={count >= credits} onClick={increment}>
                    +
                </Button>
            </div>
        </div>
    )
}