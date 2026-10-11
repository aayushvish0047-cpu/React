
function Navbar({user = { isActive :true , name:"Aayush"}})
{
  return(
    <ul>
      <li>home</li>
      <li>about</li>
      <li>Shop</li>
      <li>search</li>
      {/* consditional renduring */}
      <li>{user.isActive? user.name :" login"}</li> 
    </ul>

  );
}
export default Navbar;