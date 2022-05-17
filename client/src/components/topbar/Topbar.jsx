import "./topbar.css";

function Topbar() {
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
                 <li className="topListItem">HOME</li>
                 <li className="topListItem">ABOUT</li>
                 <li className="topListItem">CONTACT</li>
                 <li className="topListItem">WRITE</li>
                 <li className="topListItem">LOGOUT</li>
              </ul>
         </div>
         <div className="topRight">
             <img 
             className="topImg"
             src="https://wallsdesk.com/wp-content/uploads/2016/09/Lotus-Flower-Computer-Wallpaper.jpg" 
             alt="flower" />
             <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
         </div>
     </div>
  )
}

export default Topbar