import "../singlePost/singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
          <img 
           className="singlePostImg"
           src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
           alt=""  
          />
          <h1 className="singlePostTitle">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              <div className="singlePostEdit">
              <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
              <i className="singlePostIcon fa-solid fa-trash-can"></i>
              </div>
          </h1>
          <div className="singlePostInfo">
              <span className="singlePostAuthor">
                  Author: <b>Ashim</b>
              </span>
              <span className="singlePostDate">
                  1 hour ago
              </span>
          </div>
          <p className="singlePostDesc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Vitae voluptate similique minus, obcaecati pariatur repellendus 
              omnis blanditiis voluptatem error sapiente veritatis labore 
              alias tempore voluptatum? In officiis officia pariatur! Vitae.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Vitae voluptate similique minus, obcaecati pariatur repellendu
              omnis blanditiis voluptatem error sapiente veritatis labore 
              alias tempore voluptatum? In officiis officia pariatur! Vitae.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Vitae voluptate similique minus, obcaecati pariatur repellendu
              omnis blanditiis voluptatem error sapiente veritatis labore 
              alias tempore voluptatum? In officiis officia pariatur! Vitae.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Vitae voluptate similique minus, obcaecati pariatur repellendu
              omnis blanditiis voluptatem error sapiente veritatis labore 
              alias tempore voluptatum? In officiis officia pariatur! Vitae.
          </p>
      </div>
    </div>
  )
}
