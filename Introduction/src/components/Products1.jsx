import { Product } from "./Product";

export function Products1({Products}){
    return(
    <div>
        {Products.map(({title , price} ,i)=>{
                return <Product key={i} title={title} price={price}/>
              })}
    </div>
    )
}