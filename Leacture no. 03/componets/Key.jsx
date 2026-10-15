import React from 'react'

export function Key() {
    const students=["Aayush","Prince","Ishan","Vamika","Anvi","Rajan","Rahul"]
    const products = ["keyboard","mouse","Mointer","cpu"]
  return (
    <div>
    <ul>
        {students.map((student) =>(
            <li key={student}>{student}</li>
        ))}
    </ul>
    <ul>
        {
            products.map((product,i)=>(
                <li key={i}>{product}</li>
            ))
        }
    </ul>
    </div>
   
  );
}
