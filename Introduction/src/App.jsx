import Footer2, {Footer} from "./components/Footer";// named  import
import Navbar from "./components/Navbar";// default import
import { Product } from "./components/Product";

const user ={
  name:"Ayush",
  isActive:true,

}
const Products=[
  {
    title:"Nike ka juta",
    price:400
  },
  {
    title:"Campus ka shoes",
    price:200
  },
  {
    title:"Titan ki watch",
    price:450
  }
]


function App(){
  return (
    <div>
    <Navbar/>
    <div>
      {Products.map(({title , price} ,i)=>{
        return <Product key={i} title={title} price={price}/>
      })}
    </div>

    <h1>This is Aayush here</h1>
    <Footer/>
    <Footer2/>
    </div>
  )
}

export default App
