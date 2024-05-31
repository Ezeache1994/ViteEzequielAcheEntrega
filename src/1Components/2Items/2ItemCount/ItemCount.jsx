import "./ItemCount.css"

export default function ItemCount({credits,count,increment,decrement}){
    return(
        <div className="Container_of-CountItem" >
            <div className="CountItem__Count"  >
            <button className="CountItem__Button" onClick={decrement}>
                -
            </button>
            <h1 className="CountItem__The--Counter" >
                {count}
            </h1>
                <button className="CountItem__Button" disabled={count >= credits} onClick={increment}>
                    +
                </button>
            </div>
        </div>
    )
}