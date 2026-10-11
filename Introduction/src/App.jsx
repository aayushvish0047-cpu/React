import Footer2, {Footer} from "./components/Footer";// named  import
import Navbar from "./components/Navbar";// default import
import { Products1 } from "./components/Products1";

const user ={
  name:"Aayush",
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
      {/* yaha pe bhi user ka object pass kar skte hai user ={user} */}
    <Navbar />
    <Products1 Products={Products}>
      <p>Porducts</p>
      <a href="aayush-v-porfolio-netlifi">Go to this linke I have a suprise for u </a>
    </Products1>
    <h1>This is Aayush here</h1>
    <Footer/>
    <Footer2/>
    </div>
  )
}

export default App
