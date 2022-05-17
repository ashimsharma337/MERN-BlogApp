import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt="flower"/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Hic, velit laboriosam. Aliquid debitis pariatur quis voluptatum rem! 
             suscipit ullam harum pariatur et dolorum, 
          </p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcons fa-brands fa-facebook-square"></i>   
          <i className="sidebarIcons fa-brands fa-twitter-square"></i>    
          <i className="sidebarIcons fa-brands fa-pinterest-p"></i>   
          <i className="sidebarIcons fa-brands fa-instagram-square"></i>  
        </div>
        </div>
    </div>
  )
}
