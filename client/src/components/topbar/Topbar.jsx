import "./topbar.css";
import { Link } from "react-router-dom";

function Topbar() {
  const user = false;
  return (
     <div className="top">
         <div className="topLeft">
            <i className="topIcons fa-brands fa-facebook-square"></i>   
            <i className="topIcons fa-brands fa-twitter-square"></i>    
            <i className="topIcons fa-brands fa-pinterest-p"></i>   
            <i className="topIcons fa-brands fa-instagram-square"></i>  
         </div>
         <div className="topCenter">
              <ul className="topList">
                 <li className="topListItem"><Link to="/" className="link">HOME</Link></li>
                 <li className="topListItem"><Link to="/about" className="link">ABOUT</Link></li>
                 <li className="topListItem"><Link to="/contact" className="link">CONTACT</Link></li>
                 <li className="topListItem"><Link to="/write" className="link">WRITE</Link></li>
                 <li className="topListItem">{user && "LOGOUT"}</li>
              </ul>
         </div>
         <div className="topRight">
            {
               user ? (
                  <img 
                    className="topImg"
                    src="https://wallsdesk.com/wp-content/uploads/2016/09/Lotus-Flower-Computer-Wallpaper.jpg"
                    alt="flower" /> 
               ) : (
                   <ul className="topList">
                      <li className="topListItem">
                        <Link className="link" to="/login">LOGIN</Link>
                      </li>
                      <li className="topListItem">
                        <Link className="link" to="/register">REGISTER</Link>
                      </li>
                   </ul>
                   )
            }
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
         </div>
     </div>
  )
}

export default Topbar