let colors  = ['red','green','pink','yellow','black'];
let user ={
  name :"Ayush",
  isloggedin:true
}
function printName(){
  let warning ="Dont click me"; 
  return warning;
}
function App() {
  return (
    <>
    <div>Hello this is Aayush</div>
    <div>We are building forentend using react</div>
    <p>{5+6}</p>
    <p> 8 + 9 </p>
    <ul>
      {
        colors.map((c)=>{
          return <li>{c}</li>
        })
      }
    </ul>
    <p>
      {user.isloggedin ? `${user.name} is Online`: `${user.name} is offline`}
    </p>
    <button className="PrintWarning" onClick={printName}>Dont click me </button>
    <img src="" alt="" />

    </>
    
  );
}
console.log(App());

export default App
