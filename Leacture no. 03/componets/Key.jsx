import React, { useState } from 'react'

function Product({name}){
    const [quantity,setQuantity] = useState(0);

    return (
        <div>
            <h2>{name}</h2>
            <button onClick={()=> setQuantity((prev)=>prev + 1)}>quantity :{quantity}</button>
        </div>
    );
}
export default Product





export function Key() {
    const students=["Aayush","Prince","Ishan","Vamika","Anvi","Rajan","Rahul"]
    const [products,setProducts] = useState(
        [
            {id:1,name:"Keybaord"},
            {id:2 ,name :"Mouse"},
            {id:3 , name:"Moniter"}
        ]
    )

 function removeFirstProduct(){
    setProducts((prev)=>prev.slice(1))
 }
    return (
    <div>
    {/* <ul>
        {students.map((student) =>(
            <li key={student}>{student}</li>
        ))}
    </ul> */}
    <ul>
        {
            products.map((p,id)=>(
               <Product key={id} name={p} />
            ))
        }
    </ul>
    <button onClick={removeFirstProduct}>Remove Fisrt Product </button>
    </div>
   
  );
}
